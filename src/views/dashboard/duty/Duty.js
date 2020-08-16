import React, { useState, useEffect, memo } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { Table, message } from "antd";

import { FiCoffee } from "react-icons/fi";

import { Container, Title, Content } from "../team/styles/team";
import { DutyControllerButtons, DaysDuties } from "./styles/duty";

import { membersDutyApi } from "../../../api";

import user from "../../../assets/user.png";
import ModalOnDuty from "../../../components/duty/ModalOnDuty";
import ModalFinishingDuty from "../../../components/duty/ModalFinishingDuty";

const Duty = ({ je, member }) => {
  const apiURL = "https://backend-dvora.herokuapp.com/files/member";
  let [sortedInfo, setSortedInfo] = useState();
  const [memberOnDuty, setMemberOnDuty] = useState([]);
  const [newDuty, setNewDuty] = useState();

  const history = useHistory();

  function addZero(number) {
    if (number < 10) {
      number = "0" + number;
    }
    return number;
  }

  function formatTime(time) {
    const currentdate = new Date(time);
    let h = addZero(currentdate.getHours());
    let m = addZero(currentdate.getMinutes());
    return h + ":" + m;
  }

  useEffect(() => {
    const loadDuties = async () => {
      try {
        const response = await membersDutyApi.list(je.id);
        console.log({ response });
        if (response.status === 200) {
          const data = [];
          response.data.members.forEach((currentMember) => {
            currentMember.duties.forEach((memberDuty) => {
              const memberObj = {
                ...memberDuty,
                member: currentMember.member,
                startTime: formatTime(memberDuty.createdAt),
                finishTime:
                  memberDuty.status && formatTime(memberDuty.updatedAt),
              };
              data.push(memberObj);
            });
          });
          console.log({ data });
          setMemberOnDuty(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadDuties();
  }, [formatTime, je.id, newDuty]);

  async function handleFinished(values) {
    try {
      const response = await membersDutyApi.finish(values);
      if (response.status === 200) {
        values.member.finishTime = formatTime(response.data.updatedAt);
        setMemberOnDuty([...memberOnDuty]);
        message.success("Plantão finalizado!");
        const dutyId = values.dutyId;
        history.push({
          pathname: "/dashboard/feedback",
          state: {
            dutyId,
          },
        });
      }
    } catch (error) {
      message.error(error.response.data.msg);
    }
  }

  function handleChange(sorter) {
    setSortedInfo(sorter);
  }

  sortedInfo = sortedInfo || {};

  const columns = [
    {
      title: "Plantões do dia",
      key: "tableTitle",
      children: [
        {
          dataIndex: "file",
          width: "4%",
          render: (file) => (
            <img src={file ? `${apiURL}/${file}` : user} alt="Foto de perfil" />
          ),
        },
        {
          title: "Nome",
          dataIndex: "member",
          sorter: (a, b) => a.member.localeCompare(b.member),
          sortOrder: sortedInfo.columnKey === "member" && sortedInfo.order,
          ellipsis: true,
        },
        {
          title: "Início",
          dataIndex: "startTime",
        },
        {
          title: "Término",
          dataIndex: "finishTime",
        },
        {
          title: "Finalizar plantão",
          dataIndex: "duty.memberId",
          render: (text, record) =>
            record.finishTime === null ? (
              <ModalFinishingDuty
                onSubmit={handleFinished}
                member={record}
                dutyId={record.duty.id}
                memberId={member.id}
              />
            ) : (
              <span>CONCLUÍDO!</span>
            ),
        },
      ],
    },
  ];

  return (
    <Container>
      <Title>
        <h2>
          Plantão <FiCoffee />
        </h2>
      </Title>
      <Content>
        <p style={{ fontSize: "16px" }}>Bora pra mais um plantão ?</p>

        <DutyControllerButtons>
          <ModalOnDuty setNewDuty={setNewDuty} />
        </DutyControllerButtons>

        <DaysDuties>
          <Table
            rowKey="id"
            columns={columns}
            scroll={{ x: true }}
            dataSource={memberOnDuty}
            pagination={false}
            onChange={handleChange}
          />
        </DaysDuties>
      </Content>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  je: state.je,
  member: state.member,
});

export default connect(mapStateToProps)(memo(Duty));

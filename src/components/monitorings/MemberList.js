import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { feedbacksApi } from "../../api";

import { Table, Skeleton, Icon } from "antd";

import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";

function MemberList(props) {
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      try {
        const response = await feedbacksApi.index();
        console.log(response);
        if (response.status === 200) {
          setMembers(response.data);
        }
      } catch (err) {
        console.log(err.response.data);
      }
      setLoading(false);
    };
    fetchMembers();
  }, [props.je.id]);

  function handleStatusIcon(status) {
    if (status === 0 || null)
      return <IoIosCloseCircle style={{ color: "#E71A23" }} />;
    else return <IoIosCheckmarkCircle style={{ color: "#89C03E" }} />;
  }

  function handleStatus(status) {
    if (status === 0 || null) return "Não feito";
    else return "Feito";
  }

  const columns = [
    // {
    //   dataIndex: 'file',
    //   key: 'file',
    //   width: '4%',
    //   render: file => <img src={file ? file : user} alt="Foto de perfil" />,
    // },
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
    },
    {
      key: "dutyStatusIcon",
      render: (row) => handleStatusIcon(row.isDutyDone),
      width: "4%",
    },
    {
      title: "Plantão",
      key: "dutyStatus",
      render: (row) => handleStatus(row.isDutyDone),
    },
    {
      dataIndex: "isDutyDone",
      key: "duty",
      visible: false,
    },
    {
      key: "accStatusIcon",
      render: (row) => handleStatusIcon(row.isMonitoringDone),
      width: "4%",
    },
    {
      title: "Acompanhamento",
      key: "accStatus",
      render: (row) => handleStatus(row.isMonitoringDone),
    },
    {
      dataIndex: "isMonitoringDone",
      key: "acc",
      visible: false,
    },
    {
      title: "Cargo",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Detalhes",
      dataIndex: "",
      key: "details",
      render: (row) => (
        <Link type="link" to={`monitoring/details/${row.id}`}>
          <Icon type="eye" />
        </Link>
      ),
    },
  ];

  return (
    <Skeleton active loading={loading}>
        <Table
          columns={columns.filter((column) => column.visible !== false)}
          scroll={{ x: true }}
          dataSource={members}
        />
    </Skeleton>
  );
}

const mapStateToProps = (state) => ({
  je: state.je,
});

export default connect(mapStateToProps)(MemberList);

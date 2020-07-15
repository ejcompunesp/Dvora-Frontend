import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { feedbacksApi } from '../../api';

import { Table, Skeleton } from 'antd';

import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import { MdTimelapse } from 'react-icons/md';

import user from '../../assets/user.png';

function MemberList(props) {
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      try {
        const response = await feedbacksApi.index(props.je.id);
        if (response.status === 200) {
          console.log(response.data);
          setMembers(response.data);
        }
      } catch (err) {
        console.log(err.response.data);
      }
      setLoading(false);
    }
    fetchMembers();
  }, [props.je.id]);

  function handleStatusIcon(status) {
    if (status === 0 || null)
      return <IoIosCloseCircle style={{ color: "#E71A23" }} />;
    else if (status === 1)
      return <IoIosCheckmarkCircle style={{ color: "#89C03E" }} />;
    else return <MdTimelapse />;
  }

  function handleStatus(status) {
    if (status === 0 || null)
      return "Não feito";
    else if (status === 1) 
      return "Feito";
    else return "Não respondido";

  }

  const columns = [
    // {
    //   dataIndex: 'file',
    //   key: 'file',
    //   width: '4%',
    //   render: file => <img src={file ? file : user} alt="Foto de perfil" />,
    // },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      width: '25%',
    },
    {
      key: 'dutyStatusIcon',
      width: '2%',
      render: (row) => handleStatusIcon(row.isDutyDone),
    },
    {
      title: 'Plantão',
      key: 'dutyStatus',
      width: '21%',
      render: (row) => handleStatus(row.isDutyDone),
    },
    {
      dataIndex: 'isDutyDone',
      key: 'duty',
      visible: false,
    },
    {
      key: 'accStatusIcon',
      width: '2%',
      render: (row) => handleStatusIcon(row.isMonitoringDone),
    },
    {
      title: 'Acompanhamento',
      key: 'accStatus',
      width: '21%',
      render: (row) => handleStatus(row.isMonitoringDone),
    },
    {
      dataIndex: 'isMonitoringDone',
      key: 'acc',
      visible: false,
    },
    {
      title: 'Cargo',
      dataIndex: 'position',
      key: 'position',
      width: '25%',
    },
  ];

  return (
    <Skeleton active loading={loading} >
      <div>
        <Table columns={columns.filter(column => column.visible !== false)} scroll={{ x: true }} dataSource={members} />
      </div>
    </Skeleton>
  );
}

const mapStateToProps = state => ({
  je: state.je
});

export default connect(mapStateToProps)(MemberList);
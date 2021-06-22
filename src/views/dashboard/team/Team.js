import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { membersApi } from '../../../api';
import { isLoginMember } from '../../../api/auth';

import { Pagination, message, Menu, Dropdown, Popconfirm, Skeleton } from 'antd'

import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiMoreVertical, FiUsers } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

import {
  Content, TeamMembers,
  MoreButton, DropdownItem, SocialMedias, Pages
} from './styles/team';

import MemberRegistration from '../../../components/registrations/MemberRegistration';
import MemberEdit from '../../../components/edits/MemberEdit';
import Header from '../../../components/common/Header';
import user from '../../../assets/user.png';

function Team(props) {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage, setMembersPerPage] = useState(12);
  const [visible, setVisible] = useState(false);
  const invisibleToMember = isLoginMember();
  const [newMember, setNewMember] = useState();

  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      try {
        const response = await membersApi.list(props.je.id);
        if (response.status === 200) {
          setMembers(response.data.members);
        }
      } catch (err) {
        console.log(err);
        console.log(err.response);
      }
      setLoading(false);
    }
    fetchMembers();
  }, [props.je.id, newMember]);

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMember = members.slice(indexOfFirstMember, indexOfLastMember);

  function handlePageChange(page, pageSize) {
    setCurrentPage(page);
  }

  function handleMember(member) {
    return (
      <Menu>
        <Menu.Item key="0">
          <MemberEdit setNewMember={setNewMember} member={member} />
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
          <Popconfirm
            title="Deseja mesmo remover o membro?"
            onConfirm={() => handleRemove(member.id)}
            okText="Yes"
            cancelText="No"
          >
            <DropdownItem><RiDeleteBinLine /> Remover</DropdownItem>
          </Popconfirm>
        </Menu.Item>
      </Menu>
    );
  }

  async function handleSubmit(values) {
    const data = new FormData();
    data.append('name', values.name);
    data.append('email', values.email);
    data.append('password', values.password);
    data.append('sr', values.sr);
    data.append('boardId', values.boardId);
    data.append('position', values.position);
    // data.append('phone', values.phone);
    // data.append('facebook', values.facebook);
    // data.append('instagram', values.instagram);
    // data.append('linkedin', values.linkedin);
    data.append('file', values.file);
    data.append('isDutyDone', 0);

    try {
      const response = await membersApi.store(data);
      if (response.status === 200) {
        setMembers([...members, response.data.member]);
        message.success('Membro inserido com sucesso!');
        setVisible(false);
      }
    } catch (err) {
      console.log(err);
      message.error(err.response.data.msg);
    }
  }

  async function handleRemove(memberId) {
    try {
      const response = await membersApi.delete({ memberId: memberId });
      if (response.status === 200) {
        setMembers(members.filter(item => item.id !== memberId));
        message.success('Membro removido com sucesso!');
      }
    } catch (err) {
      console.log(err.response.data);
      message.error(err.response.data.msg);
    }
  }

  return (
    <>
      <Header
        title="Nossa equipe"
        icon={<FiUsers />}
        button={!invisibleToMember && <MemberRegistration visible={visible} setVisible={setVisible} onSubmit={handleSubmit} />}
      />
      <Content>
        <Skeleton loading={loading}>
          <TeamMembers>
            {currentMember.map((member) => {
              return (
                <li key={member.id}>
                  {!invisibleToMember &&
                    <MoreButton>
                      <Dropdown overlay={handleMember(member)} trigger={['click']} placement="bottomRight">
                        <FiMoreVertical className="ant-dropdown-link" onClick={e => e.preventDefault()} />
                      </Dropdown>
                    </MoreButton>
                  }
                  <img src={member.image ? `https://backend-dvora.herokuapp.com/files/member/${member.image}` : user} alt={"Foto de perfil"} />
                  <strong>{member.name}</strong>
                  <p>{member.position}</p>
                  <SocialMedias>
                    <a title="Facebook" href={member.facebook} rel="noopener noreferrer" target="_blank">
                      <FaFacebookSquare style={{ color: "#3b5998" }} />
                    </a>
                    <a title="Instagram" href={member.instagram} rel="noopener noreferrer" target="_blank">
                      <FaInstagram className="insta" />
                    </a>
                    <a title="Linkedin" href={member.linkedin} rel="noopener noreferrer" target="_blank">
                      <FaLinkedin style={{ color: "#0e76a8" }} />
                    </a>
                  </SocialMedias>
                </li>
              )
            })}
          </TeamMembers>
          <Pages>
            <Pagination
              defaultCurrent={1}
              current={currentPage}
              total={members.length}
              pageSize={membersPerPage}
              onChange={handlePageChange}
            />
          </Pages>
        </Skeleton>
      </Content>
    </>
  );
}

const mapStateToProps = state => ({
  je: state.je
});

export default connect(mapStateToProps)(Team);
import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { membersApi } from '../../../api';

import { Pagination, message, Menu, Dropdown, Popconfirm, Skeleton } from 'antd'

import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiOutlineRocket } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

import { Container, Title, Content, TeamMembers, 
  MoreButton, DropdownItem, SocialMedias, Pages } from './styles/team';

import MemberRegistration from '../../../components/registrations/MemberRegistration';
import MemberEdit from '../../../components/edits/MemberEdit';
import user from '../../../assets/user.png';

function Team(props) {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage, setMembersPerPage] = useState(12);

  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      try {
        const response = await membersApi.list(props.je.id);
        if (response.status === 200) {
          console.log(response);
          setMembers(response.data.members);
        }
      } catch (err) {
        console.log(err);
        console.log(err.response);
      }
      setLoading(false);
    }
    fetchMembers();
  }, [props.je.id]);

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMember = members.slice(indexOfFirstMember, indexOfLastMember);

  function handlePageChange(page, pageSize) {
    setCurrentPage(page);
  }

  function handleMember(memberId) {
    
    return (
      <Menu>
        <Menu.Item key="0">
          <MemberEdit onSubmit={() => handleEdit(memberId)} />
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
          <Popconfirm
            title="Deseja mesmo remover o membro?"
            onConfirm={() => handleRemove(memberId)}
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
    data.append('board', values.board);
    data.append('position', values.position);
    // data.append('phone', values.phone);
    // data.append('facebook', values.facebook);
    // data.append('instagram', values.instagram);
    // data.append('linkedin', values.linkedin);
    data.append('file', values.file);
    data.append('isDutyDone', 0);

    try {
      const response = await membersApi.store(props.je.id, data);
      if (response.status === 200) {
        setMembers([...members, response.data.member]);
        message.success('Membro inserido com sucesso!');
        console.log(response);
      }
    } catch (err) {
      console.log(err);
      message.error('Erro ao inserir o membro');
      console.log(err.response.data);
    }
  }

  async function handleEdit(values, memberId) {
    const data = new FormData();
    data.append('name', values.name);
    data.append('id', memberId);
    data.append('password', values.password);
    data.append('sr', values.sr);
    data.append('board', values.board);
    data.append('position', values.position);
    // data.append('phone', values.phone);
    // data.append('facebook', values.facebook);
    // data.append('instagram', values.instagram);
    // data.append('linkedin', values.linkedin);
    data.append('file', values.file);
    console.log(memberId);

    try {
      const response = await membersApi.update(props.je.id, {
        id: data.id,
        name: data.name,
        board: data.board,
        position: data.position,
        sr: data.sr,
        password: data.password,
        file: data.file
      });
      if (response.status === 200) {
        setMembers(members.filter(item => item.id !== memberId));
        message.success('Membro editado com sucesso!');
      }
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async function handleRemove(memberId) {
    console.log(memberId);
    try {
      const response = await membersApi.delete(props.je.id, { id: memberId });
      if (response.status === 200) {
        setMembers(members.filter(item => item.id !== memberId));
        message.success('Membro removido com sucesso!');
      }
    } catch (err) {
      console.log(err.response.data);
    }
  }

  return (
    <Container>
      <Title>
        <h2>Nossa equipe <AiOutlineRocket className="rocket" /></h2>
        <MemberRegistration onSubmit={handleSubmit} />
      </Title>
      <Content>
        <TeamMembers>
          {currentMember.map((member) => {
            return (
              loading ? <Skeleton active avatar paragraph={{ rows: 2 }} /> :
                <li key={member.id}>
                  <MoreButton>
                    <Dropdown overlay={handleMember(member.id)} trigger={['click']} placement="bottomRight">
                      <FiMoreVertical className="ant-dropdown-link" onClick={e => e.preventDefault()} />
                    </Dropdown>
                  </MoreButton>
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
      </Content>
    </Container>
  );
}

const mapStateToProps = state => ({
  je: state.je
});

export default connect(mapStateToProps)(Team);
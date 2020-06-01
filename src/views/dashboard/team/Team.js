import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { membersApi } from '../../../api';

import { Pagination, message, Menu, Dropdown } from 'antd'

import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiOutlineRocket } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';

import { Container, Title, Content, TeamMembers, SocialMedias, Pages } from './styles/team';

import MemberRegistration from '../../../components/registrations/MemberRegistration';
import user from '../../../assets/user.png';

function Team(props) {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage, setMembersPerPage] = useState(10);

  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={handleEdit}>
        Edit
      </Menu.Item>
      <Menu.Divider/>
      <Menu.Item key="1"onClick={handleRemove}>
        Remove
      </Menu.Item>
    </Menu>
  );

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
    data.append('file', values.file[0]);

    try {
      const response = await membersApi.store(data, props.je.id);
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

  function handleEdit() {

  }

  function handleRemove() {
    
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
              <li key={member.sr}>
                <Dropdown overlay={menu} trigger={['click']}>
                  <FiMoreVertical className="ant-dropdown-link" onClick={e => e.preventDefault()}/>
                </Dropdown>
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
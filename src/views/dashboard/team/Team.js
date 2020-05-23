import React, { useState, useEffect } from 'react';

import { Pagination } from 'antd'

import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiOutlineRocket } from 'react-icons/ai';

import { Container, Title, Content, TeamMembers, SocialMedias, Pages } from './styles/team';

import { data } from '../../../api/ApiTeste';
import MemberRegistration from '../../../components/registrations/MemberRegistration';
import user from '../../../assets/user.png';

export default function Team() {
  const [ posts, setPosts ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ postsPerPage, setPostsPerPage ] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await {data};
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  function handlePageChange(page, pageSize){
    setCurrentPage(page);
  }

  function handleSubmit(values) {
    console.log(values);

    const data = new FormData ();

    data.append('name', values.name);
    data.append('email', values.email);
    data.append('password', values.password);
    data.append('sr', values.sr);
    data.append('board', values.board);
    data.append('position', values.position);
    data.append('phone', values.phone);
    data.append('facebook', values.facebook);
    data.append('instagram', values.instagram);
    data.append('linkedin', values.linkedin);
    data.append('file', values.file[0]);

    setPosts([...posts, values]);
  }

  return (
    <Container>
      <Title>
        <h2>Nossa equipe <AiOutlineRocket className="rocket"/></h2>
        <MemberRegistration onSubmit={handleSubmit} />
      </Title>
      <Content>
        <TeamMembers>
          {currentPosts.map(member => {
            return (
              <li key={member.sr}>
                <img src={member.file?member.file:user} alt={"Foto de perfil"} />
                <strong>{member.name}</strong>
                <p>{member.position}</p>
                <SocialMedias>
                  <a title="Facebook" href={member.facebook} rel="noopener noreferrer" target="_blank">
                    <FaFacebookSquare style={{ color: "#3b5998" }}/>
                  </a>
                  <a title="Instagram" href={member.instagram} rel="noopener noreferrer" target="_blank">
                    <FaInstagram className="insta"/>
                  </a>
                  <a title="Linkedin" href={member.linkedin} rel="noopener noreferrer" target="_blank">
                    <FaLinkedin style={{ color: "#0e76a8" }}/>
                  </a>
                </SocialMedias>
              </li>
            )
          })}
        </TeamMembers>
        <Pages>
          <Pagination 
            defaultCurrent={1} 
            total={data.length} 
            pageSize={postsPerPage} 
            onChange={handlePageChange}
            />
        </Pages>
      </Content>
    </Container>
  );
}
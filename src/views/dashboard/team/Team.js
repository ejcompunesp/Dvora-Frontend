import React, { useState, useEffect } from 'react';

import { Pagination } from 'antd'

import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { Container, Title, TeamMembers, SocialMedias, Pages, ContentDiv } from './styles/team';

import { data } from '../../../api/ApiTeste';
import MemberRegistration from '../../../components/dashboardComponents/MemberRegistration';
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
    setPosts([...posts, values]);
  }

  return (
    <Container>
      <Title>
        Nossa equipe
        <MemberRegistration onSubmit={handleSubmit} />
      </Title>
      <ContentDiv>
        <TeamMembers>
          {currentPosts.map(member => {
            return (
              <li key={member.sr}>
                <img src={member.img?member.img:user} alt={"Foto de perfil"} />
                <strong>{member.name}</strong>
                <p>{member.role}</p>
                <SocialMedias>
                  <a title="Facebook" href={member.facebookLink} target="_blank">
                    <FaFacebookSquare style={{ color: "#3b5998" }}/>
                  </a>
                  <a title="Instagram" href={member.instagramLink} target="_blank">
                    <FaInstagram className="insta"/>
                  </a>
                  <a title="Linkedin" href={member.linkedinLink} target="_blank">
                    <FaLinkedin style={{ color: "#0e76a8" }}/>
                  </a>
                </SocialMedias>
              </li>
            )
          })}
        </TeamMembers>
      </ContentDiv>
      <Pages>
        <Pagination 
          defaultCurrent={1} 
          total={data.length} 
          pageSize={postsPerPage} 
          onChange={handlePageChange}
        />
      </Pages>
    </Container>
  );
}
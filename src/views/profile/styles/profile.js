import styled from "styled-components";

export const Title = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 26vh;
  padding: 30px;
  color: #4a4a4a;
  font-size: 30px;
  font-weight: 500;
  border-bottom: solid 1px #4a4a4a;
  margin-bottom: 20px;
  strong{
    font-size: 36px;
  }
  img{
    position: absolute;
    width: 200px;
    border-radius: 50%;
    margin: 40px 25px 25px 25px;
  }
  li{
    margin-right: 90px;
    p{
      margin: 0;
    }
  }
`;

export const UserInfo = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 50px;
`;

export const LastDuties = styled.div`
  border: solid 1px #aaaaaa;
  border-radius: 6px;
  margin: 0 25px 10px 10px;
  padding: 30px;
`;

export const About = styled.div`
  border: solid 1px #aaaaaa;
  border-radius: 6px;
  margin: 0 10px 50px 25px;
  padding: 30px;
`;

export const ActualProject = styled.div`
  border: solid 1px #aaaaaa;
  border-radius: 6px;
  margin: 10px 10px 10px 25px;
  padding: 30px;
`;
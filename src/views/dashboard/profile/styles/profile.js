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
    margin: 4
    0px 25px 25px 25px;
  }
  li{
    margin-right: 90px;
    
    p{
      margin: 0;
    }
  }
`;

export const UserInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 12px;
  align-items: center;
  justify-content: center;

  strong {
    margin-left: 55px;
    font-size: 16px;
  }
`;

export const LastDuties = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #aaaaaa;
  border-radius: 6px;
  margin: 0 25px 20px 0;
  padding: 16px;

  span {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;

    svg {
      margin-right: 6px;
    }
  }
`;

export const Duties = styled.li`
  display: flex;
  align-items: center;
  margin: 4px;
  padding: 8px;
  font-size: 16px;

  svg {
    margin-right: 6px;
  }

  hr {
    border: solid 1px #aaaaaa;
    margin: 0 8px 0 8px;
    width: 50px;
  }
`;

export const About = styled.div`
  border: solid 1px #aaaaaa;
  border-radius: 6px;
  margin: 0 10px 40px 25px;
  padding: 30px;
`;

export const ActualProject = styled.div`
  border: solid 1px #aaaaaa;
  border-radius: 6px;
  margin: 10px 10px 10px 25px;
  padding: 30px;
`;
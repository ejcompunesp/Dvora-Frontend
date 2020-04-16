import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  border: solid 1px #aaaaaa;
  border-radius: 6px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-family: "Ubuntu";
`;

export const Title = styled.div`
  width: 100%;
  margin-bottom: 30px;
  padding: 30px 50px 30px 50px;
  color: #4a4a4a;
  font-size: 30px;
  font-weight: 500;
  border-bottom: solid 1px #aaaaaa;
`;

export const TeamMembers = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  margin: 0 30px 20px 30px; 
  li{
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 20px;
    border: solid 1px #aaaaaa;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    p{
      margin: 0 0 10px 0;
    }
    img{
      width: 100px;
      border-radius: 50%;
      margin-bottom: 10px;
    }
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  svg{
    font-size: 36px;  
    margin: 2px;
    padding: 4px;
  }
  a:hover{
    svg{
      font-size: 40px;
      margin: 0;
    }
  }
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  padding: 5px;
`;
import styled from "styled-components";

export const Header = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  padding: 30px 50px 30px 50px;
  color: #4a4a4a;
  font-size: 30px;
  font-weight: 500;
  
  strong{
    font-size: 36px;
  }
  
  li{
    p{
      margin: 0;
    }
  }
  
  img{
    width: 128px;
    border-radius: 50%;
    margin: 40px 40px 25px 25px;
  }
`;

export const Title = styled.div`
  margin: 0 90px 30px 90px;
  border-bottom: solid 1px #aaaaaa;
  color: #4a4a4a;
  font-size: 30px;
  font-weight: 500;
`;

export const FeedbackContent = styled.div`
  padding: 30px 90px 30px 90px;
  margin-bottom: 30px;
  
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
`;
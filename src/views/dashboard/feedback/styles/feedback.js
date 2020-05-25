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
  
  li p{
      margin: 0;
  }
  
  img{
    width: 128px;
    border-radius: 50%;
    margin: 40px 40px 25px 25px;
  }
`;

export const Title = styled.div`
  margin: 0 90px 20px 90px;
  border-bottom: solid 1px #aaaaaa;
  color: #4a4a4a;
  font-size: 30px;
  font-weight: 500;
`;

export const FeedbackForm = styled.div`
  margin-bottom: 30px;
`;

export const Question = styled.div`
  margin-bottom: 20px;

  p{
    margin-bottom: 8px;
    font-size: 16px;
  }

  textarea{
    width: 50%;
    padding: 10px;
    line-height: 20px;
    border-radius: 6px;
    resize: vertical;
  }
`;
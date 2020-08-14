import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: solid 0.1rem var(--color-border);

  h2 {
    display: flex;
    align-items: center;
    margin: 0;
    font-size: 3rem;
    font-weight: 500;

    svg {
      margin-left: 2rem; 
    }
  }
  @media (max-width: 1100px) {
    div {
     flex-direction: column; 
     align-items: initial !important;
   }
    h2 {
      margin-bottom: 1.2rem;
    }
  }
`;

export const ProfilePhoto = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 40px;
  margin-right: 20px;
`;
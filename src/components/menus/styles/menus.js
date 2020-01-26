import styled from 'styled-components';

export const BlueNavbar = styled.div`
  width: 100%;
  background-color: ${props => props.background};
  height: 65px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  img {
    width: 55px;
  }

`;

export const BlueNavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const IconsList = styled.div`
  display: flex;
  margin: 0 20px;
  svg {
    margin: 0 10px;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const BreadCrumb = styled.h2`
  color: #ffffff;
  font-family: 'Montserrat';
  span {
    font-weight: 400;
  }
  margin-left: 30px;
`;

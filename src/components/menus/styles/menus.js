import styled from 'styled-components';

export const TopNavbarContainer = styled.div`
  width: 100%;
  background-color: ${props => props.background};
  height: 65px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  img {
    width: 55px;
  }
  h2{
    margin-bottom: 0px;
  }
`;

export const TopNavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const IconsList = styled.div`
  display: flex;
  margin: 0 20px;
  svg {
    margin: 0 14px;
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

export const SidebarContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  ul {
    list-style: none;
    text-decoration: none;
    li {
      margin-top: 20px;
      svg {
        font-size: 40px;
      }
      a {
        color: #292929;
        text-decoration: none;
        transition: .2s ease all;
      }
      a.active {
        color: #58B7D9;
        transition: .2s ease all;
      }
      a:hover {
        transition: .2s ease all;
        color: #dedede;
      }
    }
  }
`;

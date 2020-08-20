import styled from "styled-components";

export const TopNavbarContainer = styled.div`
  width: 100%;
  background-color: var(--color-primary);
  height: 7rem;
  display: grid;
  grid-template-columns: 1fr 19fr;
  align-items: center;

  img {
    width: 3.5rem;
  }

  h2 {
    margin-bottom: 0;
  }

  @media (max-width: 1100px) {
    display: flex;
  }
`;

export const TopNavLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1100px) {
    margin-left: 1.4rem;
  }
`;

export const TopNavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

 
export const IconsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  margin: 0 3rem;
  svg {
    font-size: 2rem;
    cursor: pointer;
  }
  img{
    border-radius: 2rem;
    width: 2rem;
    object-fit: cover;
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    margin: 0 1.4rem;
    grid-gap: 2rem;
  }
`;

export const BreadCrumb = styled.h2`
  color: #ffffff;
  font-family: "Montserrat";
  font-weight: 700;
  margin-left: 3rem;

  @media (max-width: 1100px) {
    margin-left: 2rem;
  }
`;

export const SidebarContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  position: relative;
  flex-direction: column;
  align-items: center;

  ul {
    list-style: none;
    text-decoration: none;
    margin: 0;

    li {
      margin-top: 2rem;

      svg {
        font-size: 4rem;
      }

      a {
        color: #292929;
        text-decoration: none;
        transition: 0.2s ease all;
      }

      a.active {
        color: #58b7d9;
        transition: 0.2s ease all;
      }

      a:hover {
        transition: 0.2s ease all;
        color: #dedede;
      }
    }
  }

  @media (max-width: 1100px) {
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 1.4rem;

      li {
        margin-top: 0;
      }
    }
  }
`;

import styled from 'styled-components';

export const Navbar = styled.div`
  width: 100%;
`;

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 19fr;

  .sidebar {
    min-height: 100vh;
    background-color: var(--color-content-background);
    box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, .3);
  }

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;

    .sidebar {
      min-height: 0;
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  margin: 3rem;
  padding: 4rem 5rem;
  background-color: var(--color-content-background);
  border-radius: 0.6rem;
  box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
  color: var(--color-text-secondary);

  button{
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--color-button-text);
  }

  button:hover{
    background: var(--color-primary);
    border-color: var(--color-primary);
    filter: brightness(110%);
  }

  @media (max-width: 1100px) {
    margin: 2rem 0;
    padding: 2rem 1.4rem;
    min-height: 100vh;
  }
`;

import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 14fr;
  .navbar {
    grid-column: 1/5;  
    width: 100%;
  }
  .sidebar {
    grid-column: 1/2;
    border: 1px solid black;
    min-height: 100vh;
    background-color: #ffffff;
  }
`;



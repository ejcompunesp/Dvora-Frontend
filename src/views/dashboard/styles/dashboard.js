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
    min-height: 100vh;
    background-color: #ffffff;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, .3);
  }
  .content {
    grid-column: 2/14;
    padding: 30px;
  }
`;



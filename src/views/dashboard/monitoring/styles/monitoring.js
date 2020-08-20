import styled from "styled-components";

export const TableStyle = styled.div`
  td{
    img{
      width: 28px;
      border-radius: 50%;
    }

    svg{
      margin-top: 6px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const MonitoringInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`


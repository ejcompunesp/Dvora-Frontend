import styled from 'styled-components';

import { Content } from '../../styles/global';

export const StyledContent = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 64rem;
    margin-right: 3rem;
  }

  b {
    font-size: 3.2rem;
  }

  @media (max-width: 1100px) {
    flex-direction: column;

    img {
      width: 32rem;
      margin: 0 0 2rem 0;
    }

    b {
      font-size: 2.4rem;
    }
  }
`;
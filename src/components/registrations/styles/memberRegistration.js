import styled from 'styled-components';
import { Modal } from 'antd';

export const StyledModal = styled(Modal)`
  width: auto;
`;

export const CentralizedUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UploadButtons = styled.div`
  display: flex;
  justify-content: flex-end;

  .cancel {
    margin-right: 12px;
  }
`;

export const UploadPhoto = styled.label`
  border: 1px dashed #ddd;
  background-size: cover;
  cursor: pointer;
  width: 200px;
  height: 200px;
  margin-bottom: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  .has-photo {
    border: 0 !important;
  }

  .has-photo svg {
    display: none !important;
  }

  input{
    display: none !important;
  }
`;
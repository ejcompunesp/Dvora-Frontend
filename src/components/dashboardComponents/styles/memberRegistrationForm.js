import styled from 'styled-components';

export const UploadButtons = styled.div`
  display: flex;
  justify-content: flex-end;

  .cancel {
    margin-right: 12px;
  }
`;

export const Thumbnail = styled.div`
  margin-bottom: 20px;
  border: 1px dashed #ddd;
  background-size: cover;
  cursor: pointer;
  width: 160px;
  height: 160px;

  display: flex;
  justify-content: center;
  align-items: center;

  input {
    display: none;
  }

  .has-thumbnail {
    border: 0;
  }

  .has-thumnail img {
    display: none;
  }
`;
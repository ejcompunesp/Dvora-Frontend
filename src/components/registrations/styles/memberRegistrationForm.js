import styled from 'styled-components';

export const UploadButtons = styled.div`
  display: flex;
  justify-content: flex-end;

  .cancel {
    margin-right: 12px;
  }
`;

export const UploadPhoto = styled.label`
  margin-bottom: 20px;
  border: 1px dashed #ddd;
  background-size: cover;
  cursor: pointer;
  width: 160px;
  height: 160px;
  
  display: flex;
  justify-content: flex-end;
  

input {
  display: none;
}

.has-thumbnail {
  border: 0;
}

.has-thumbnail img {
  display: none;
}
`;
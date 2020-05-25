import React from "react";
import { Upload, Icon, Modal } from 'antd';
import { useState } from "react";


export default function UploadImage(){

  const [file,setFile] = useState({
    previewVisible: false,
    previewImage: '',
    fileList: [
    ],
  })
  
  const handleCancel = () => setFile({ previewVisible: false });

  const handlePreview = async file => {

    setFile({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  const handleChange = ({ fileList }) => setFile({ fileList });

    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix" style={{marginTop: '60px'}}>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={file.fileList}
          onChange={handleChange}
        >
          {file.fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal visible={file.previewVisible} footer={null} onCancel={handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={file.previewImage} />
        </Modal>
      </div>
    );
}

import React, {useState, useEffect} from "react";

import { Pagination, Modal, Button, Form, Input, Upload, Icon, message  } from 'antd'
import { Container, Title, TeamMembers, SocialMedias, Pages } from "./styles/team";
import { MdPersonAdd, MdPerson, MdPhone, MdEmail, MdLock } from "react-icons/md";
import { FaAddressCard, FaUserCog, FaUserTie, FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

import JohnDoe from '../../assets/John Doe.png';

const data = [
  {
    id: 1,
    name: 'John Doe',
    img: JohnDoe,
    role: 'Gerente de projetos',
    facebookLink: 'https://www.facebook.com',
    instagramLink: 'https://www.instagram.com/?hl=pt-br',
    linkedinLink: 'https://www.linkedin.com/home',
  },
  {
    id: 2,
    name: 'Mario Doe',
    img: JohnDoe,
    role: 'Gerente de projetos',
    facebookLink: 'https://www.facebook.com',
    instagramLink: 'https://www.instagram.com/?hl=pt-br',
    linkedinLink: 'https://www.linkedin.com/home',
  },
  {
    id: 3,
    name: 'Erick Doe',
    img: JohnDoe,
    role: 'Gerente de projetos',
    facebookLink: 'https://www.facebook.com',
    instagramLink: 'https://www.instagram.com/?hl=pt-br',
    linkedinLink: 'https://www.linkedin.com/home',
  },
  {
    id: 4,
    name: 'Carlos Doe',
    img: JohnDoe,
    role: 'Gerente de projetos',
    facebookLink: 'https://www.facebook.com',
    instagramLink: 'https://www.instagram.com/?hl=pt-br',
    linkedinLink: 'https://www.linkedin.com/home',
  },
  {
    id: 5,
    name: 'José Doe',
    img: JohnDoe,
    role: 'Gerente de projetos',
    facebookLink: 'https://www.facebook.com',
    instagramLink: 'https://www.instagram.com/?hl=pt-br',
    linkedinLink: 'https://www.linkedin.com/home',
  },
  {
    id: 6,
    name: 'Paul Doe',
    img: JohnDoe,
    role: 'Gerente de projetos',
    facebookLink: 'https://www.facebook.com',
    instagramLink: 'https://www.instagram.com/?hl=pt-br',
    linkedinLink: 'https://www.linkedin.com/home',
  },
  {
    id: 7,
    name: 'Ziraldo Doe',
    img: JohnDoe,
    role: 'Gerente de projetos',
    facebookLink: 'https://www.facebook.com',
    instagramLink: 'https://www.instagram.com/?hl=pt-br',
    linkedinLink: 'https://www.linkedin.com/home',
  },
  {
    id: 8,
    name: 'Leny Doe',
    img: JohnDoe,
    role: 'Gerente de projetos',
    facebookLink: 'https://www.facebook.com',
    instagramLink: 'https://www.instagram.com/?hl=pt-br',
    linkedinLink: 'https://www.linkedin.com/home',
  },
  {
    id: 9,
    name: 'Peter Doe',
    img: JohnDoe,
    role: 'Gerente de projetos',
    facebookLink: 'https://www.facebook.com',
    instagramLink: 'https://www.instagram.com/?hl=pt-br',
    linkedinLink: 'https://www.linkedin.com/home',
  },
  {
    id: 10,
    name: 'Parker Doe',
    img: JohnDoe,
    role: 'Gerente de projetos',
    facebookLink: 'https://www.facebook.com',
    instagramLink: 'https://www.instagram.com/?hl=pt-br',
    linkedinLink: 'https://www.linkedin.com/home',
  },
  {
    id: 11,
    name: 'Tony Doe',
    img: JohnDoe,
    role: 'Gerente de projetos',
    facebookLink: 'https://www.facebook.com',
    instagramLink: 'https://www.instagram.com/?hl=pt-br',
    linkedinLink: 'https://www.linkedin.com/home',
  },
  {
    id: 12,
    name: 'Steve Doe',
    img: JohnDoe,
    role: 'Gerente de projetos',
    facebookLink: 'https://www.facebook.com',
    instagramLink: 'https://www.instagram.com/?hl=pt-br',
    linkedinLink: 'https://www.linkedin.com/home',
  },
];

export default function Team() {

  const [ posts, setPosts ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ postsPerPage, setPostsPerPage ] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await {data};
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  function handlePageChange(page, pageSize){
    setCurrentPage(page);
  }

  class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };

    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };

    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('As duas senhas inseridas são inconsistentes!');
      } else {
        callback();
      }
    };

    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };

    normFile = e => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    };

    render() {
      const { getFieldDecorator } = this.props.form;

      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Nome">
          {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Por favor, insira seu nome!',
                },
              ],
            })(<Input addonBefore={<MdPerson/>} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'Os dados inseridos não são um E-mail válido!',
              },
              {
                required: true,
                message: 'Por favor, insira seu E-mail!',
              },
            ],
          })(<Input addonBefore={<MdEmail/>} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="Senha" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Por favor, insira sua senha!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password addonBefore={<MdLock/>} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="Confirme sua senha" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Por favor, confirme sua senha!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} addonBefore={<MdLock/>} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="RA">
          {getFieldDecorator('sr', {
              rules: [
                {
                  required: true,
                  message: 'Por favor, insira seu RA!',
                },
              ],
            })(<Input addonBefore={<FaAddressCard/>} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="Diretoria">
          {getFieldDecorator('direction', {
            rules: [
              { 
                required: true, 
                message: 'Por favor, insira sua diretoria!' 
              }
            ],
          })(<Input addonBefore={<FaUserTie/>} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="Cargo">
          {getFieldDecorator('role', {
            rules: [
              { 
                required: true, 
                message: 'Por favor, insira seu cargo!' 
              }
            ],
          })(<Input addonBefore={<FaUserCog/>} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="Telefone">
          {getFieldDecorator('phone', {
          })(<Input addonBefore={<MdPhone/>} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="Facebook">
          {getFieldDecorator('facebook', {
          })(<Input addonBefore={<FaFacebookSquare/>} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="Instagram">
          {getFieldDecorator('instagram', {
          })(<Input addonBefore={<FaInstagram/>} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="Linkedin">
          {getFieldDecorator('linkedin', {
          })(<Input addonBefore={<FaLinkedin/>} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="Photo">
          {getFieldDecorator('photo', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <Icon type="camera" />
              </p>
              <p className="ant-upload-text">Clique ou arraste uma foto para esta área de upload.</p>
              <p className="ant-upload-hint">Uma única foto suportada.</p>
            </Upload.Dragger>,
          )}
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

  class AddMember extends React.Component {
    state = {
      loading: false,
      visible: false,
    };
  
    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = () => {
      this.setState({ loading: true });
      setTimeout(() => {
        this.setState({ loading: false, visible: false });
      }, 3000);
    };
  
    handleCancel = () => {
      this.setState({ visible: false });
    };
  
    render() {
      const { visible, loading } = this.state;
      return (
        <div style={{ float: "right", paddingTop: "3px" }}>
          <Button title="Adicionar membro" type="primary" style={{ fontSize: "26px" }} onClick={this.showModal}>
            <MdPersonAdd/>
          </Button>
          <Modal
            destroyOnClose={true}
            visible={visible}
            title="Inserção de membro"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Cancelar
              </Button>,
              <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                Adicionar
              </Button>,
            ]}
          >
            <WrappedRegistrationForm />
          </Modal>
        </div>
      );
    }
  }

  return (
    <Container>
      <Title>
        Nossa equipe
        <AddMember />
      </Title>
      <TeamMembers>
        {currentPosts.map(member => {
          return (
            <li key={member.id}>
              <img src={member.img} alt={member.name} />
              <strong>{member.name}</strong>
              <p>{member.role}</p>
              <SocialMedias>
                <a title="Facebook" href={member.facebookLink} target="_blank"><FaFacebookSquare style={{ color: "#3b5998" }}/></a>
                <a title="Instagram" href={member.instagramLink} target="_blank"><FaInstagram style={{ color: "#3f729b" }}/></a>
                <a title="Linkedin" href={member.linkedinLink} target="_blank"><FaLinkedin style={{ color: "#0e76a8" }}/></a>
              </SocialMedias>
            </li>
          )
        })}
      </TeamMembers>
      <Pages>
        <Pagination defaultCurrent={1} total={data.length} pageSize={postsPerPage} onChange={handlePageChange}/>
      </Pages>
    </Container>
  );
}
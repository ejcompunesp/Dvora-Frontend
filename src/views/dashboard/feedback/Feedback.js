import React from 'react';

import { Container } from '../team/styles/team';
import { Header, Title, FeedbackContent } from './styles/feedback';
import { Steps, Button, message, Rate } from 'antd';

import JohnDoe from '../../../assets/John Doe.png';

export default function Feedback() {

  const desc = ['terrível', 'ruim', 'normal', 'boa', 'ótima'];

  class Rater extends React.Component {
    state = {
      value: 3,
    };

    handleChange = value => {
      this.setState({ value });
    };

    render() {
      const { value } = this.state;
      return (
        <span>
          <Rate tooltips={desc} onChange={this.handleChange} value={value} />
          {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
        </span>
      );
    }
  }

  const { Step } = Steps;

  const steps = [
    {
      content: <Rater />,
    },
    {
      content: <Rater />,
    },
    {
      content: <Rater />,
    },
  ];

  class FeedbackQuestions extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        current: 0,
      };
    }

    next() {
      const current = this.state.current + 1;
      this.setState({ current });
    }

    prev() {
      const current = this.state.current - 1;
      this.setState({ current });
    }

    render() {
      const { current } = this.state;
      return (
        <div>
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => this.next()}>
                Próximo
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={() => message.success('Feedback enviado!')}>
                Enviar
              </Button>
            )}
            {current > 0 && (
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                Anterior
              </Button>
            )}
          </div>
        </div>
      );
    }
  }

  return(
    <Container>
      <Header>
        <li>
          <img src={JohnDoe} alt="profileImg"/>
        </li>
        <li>
          <strong>
            John Doe
          </strong>
          <p>
            Gerente de projetos
          </p>
        </li>
      </Header>
      <Title>
        Feedback
      </Title>
      <FeedbackContent>
        <FeedbackQuestions/>
      </FeedbackContent>
    </Container>
  );
}
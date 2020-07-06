import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { feedbacksApi } from '../../../api';

import { Radio, Button, message } from 'antd';

import { RiMessage3Line } from 'react-icons/ri';

import { Container, Title, Content } from '../team/styles/team';
import { FeedbackForm, Question } from './styles/feedback';

export default function Feedback(props) {
  const history = useHistory();

  const [productivity, setProductivity] = useState(3);
  const [mood, setMood] = useState(3);
  const [satisfaction, setSatisfaction] = useState(3);
  const [note, setNote] = useState('');
  const [activity, setActivity] = useState('');

  function handleProductivity(e) {
    setProductivity(e.target.value);
  };

  function handleMood(e) {
    setMood(e.target.value);
  };

  function handleSatisfaction(e) {
    setSatisfaction(e.target.value);
  };

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };

  async function handleFeedback() {
    try {
      const response = await feedbacksApi.create(props.location.state.dutyId, {
        satisfaction: satisfaction,
        productivity: productivity,
        mood: mood,
        note: note,
        activity: activity,
      });
      if (response.status === 200){
        message.success('Feedback enviado!');
        history.push('/dashboard/duty');
      }
    } catch(err) {
        message.error('Erro ao enviar o feedback...');
    }
  }

  function Alternatives() {
    return (
      <div>
        <Radio style={radioStyle} value={1}>
          Terrível
        </Radio>
        <Radio style={radioStyle} value={2}>
          Ruim
        </Radio>
        <Radio style={radioStyle} value={3}>
          Normal
        </Radio>
        <Radio style={radioStyle} value={4}>
          Boa
        </Radio>
        <Radio style={radioStyle} value={5}>
          Ótima
        </Radio>
      </div>
    );
  }

  return(
    <Container>
      <Title>
        <h2>Feedback <RiMessage3Line /></h2>
      </Title>
      <Content>
        <p style={{ fontSize: '16px' }}>Vamos, conte-nos um pouco sobre o seu plantão!</p>
        <FeedbackForm>
          <form>
            <Question>
            <p>1. Como você categoriza sua Produtividade?</p>
            <Radio.Group onChange={handleProductivity} value={productivity} >
              <Alternatives />
            </Radio.Group>
          </Question>

          <Question>
            <p>2. Como você categoriza seu Humor?</p>
            <Radio.Group onChange={handleMood} value={mood} >
              <Alternatives />
            </Radio.Group>
          </Question>

          <Question>
            <p>3. Como você categoriza sua Satisfação com a Empresa?</p>
            <Radio.Group onChange={handleSatisfaction} value={satisfaction} >
              <Alternatives />
            </Radio.Group>
          </Question>
            <Question>
              <p>4. Você tem algum comentário sobre os tópicos avaliados?</p>
              <textarea value={note} onChange={e => setNote(e.target.value)} rows="5" ></textarea>
            </Question>

            <Question>
              <p>5. Descreva a atividade realizada durante seu Plantão:</p>
              <textarea value={activity} onChange={e => setActivity(e.target.value)} rows="5" ></textarea>
            </Question>

            <Button type="primary" onClick={handleFeedback} >Enviar</Button>
          </form>
        </FeedbackForm>
      </Content>
    </Container>
  );
}
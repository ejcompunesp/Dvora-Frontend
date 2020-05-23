import React, { useState } from 'react';

import { Form, Rate, Button } from 'antd';

import { Questions } from './styles/feedbacks';

function FeedbackForm (props) {

  const opt = ['terrível', 'ruim', 'normal', 'boa', 'ótima'];

  function Rater() {
    const [value, setValue] = useState(3);

    function handleChange (value){
      setValue( value );
    };

    // const { value } = value;

    return (
      <span>
        <Rate tooltips={opt} onChange={handleChange} value={value} />
        {value ? <span className="ant-rate-text">{opt[value - 1]}</span> : ''}
      </span>
    );
  }

  function handleSubmit (e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const { getFieldDecorator } = props.form;
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
  };

  return(
    <Form {...formItemLayout} onSubmit={handleSubmit}>
        {/* <Form.Item label="Radio.Group">
          {getFieldDecorator('radio-group')(
            <Radio.Group>
              <Radio value="a">item 1</Radio>
              <Radio value="b">item 2</Radio>
              <Radio value="c">item 3</Radio>
            </Radio.Group>,
          )}
        </Form.Item>

        <Form.Item label="Radio.Button">
          {getFieldDecorator('radio-button')(
            <Radio.Group>
              <Radio.Button value="a">item 1</Radio.Button>
              <Radio.Button value="b">item 2</Radio.Button>
              <Radio.Button value="c">item 3</Radio.Button>
            </Radio.Group>,
          )}
        </Form.Item> */}

        <Form.Item label="1. Como você categoriza sua Produtividade?">
          {getFieldDecorator('productivity')(<Rater />)}
        </Form.Item>

        <Form.Item label="2. Como você categoriza seu Humor?">
          {getFieldDecorator('humor')(<Rater />)}
        </Form.Item>

        <Form.Item label="3. Como você categoriza sua Satisfação com a Empresa?">
          {getFieldDecorator('satisfaction')(<Rater />)}
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
  )
}

const FBForm = Form.create({ name: 'Feedback Form' })(FeedbackForm);

export default FBForm;
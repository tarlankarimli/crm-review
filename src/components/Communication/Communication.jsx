import React, { useState } from 'react';

import {
  Form,
  Input,
  Button,
  Switch,
} from 'antd';


function Communication() {
  const [componentSize, setComponentSize] = useState('large');
  const [switchCase, setSwitchCase] = useState('SMS');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const onChange=(checked) => {
    checked === true ? setSwitchCase('E-mail') : setSwitchCase('SMS');
    console.log(switchCase);
  }
  return (
    <div>
      <Form
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 10 }}
        layout="horizontal"
        initialValues={{ size: "large" }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Text here">
          <Input.TextArea rows={10} />
        </Form.Item>
        <div className="toggle">
          <div className="toggle-switch">
            <span>{switchCase}</span>
            <Switch onChange={onChange}/>
          </div>
          <Form.Item>
            <Button type="primary" className="toggle-btn" >Send</Button>
          </Form.Item>
        </div>

      </Form>
    </div>
  )
}

export default Communication

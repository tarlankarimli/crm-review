import React, { useState } from 'react';
import Receivers from './Modal/Receivers';

import {
  Form,
  Input,
  Button,
  Switch,
} from 'antd';


function Communication() {
  const [componentSize, setComponentSize] = useState('large');
  const [switchCase, setSwitchCase] = useState('SMS');
  const [visible, setVisible] = useState(false)
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const onChange = (checked) => {
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
        <div className="com-content">
          <div className= {switchCase === "SMS" ? "com-title_none" : "com-title"} >
          <Form.Item>
          <Input className="input-title" placeholder="E-mail title"/>
        </Form.Item>
          </div>
          <div className="toggle">
            <div className="toggle-switch">
              <span>{switchCase}</span>
              <Switch onChange={onChange} />
            </div>
            <Form.Item>
              <Button type="primary" className="toggle-btn" onClick={()=> {setVisible(true)}}>Send to</Button>
            </Form.Item>
          </div>
        </div>
      </Form>
      <Receivers 
          visible={visible}
          setVisible = {setVisible}
          />
    </div>
  )
}

export default Communication

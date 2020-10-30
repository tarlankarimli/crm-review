import React, { useState, useContext } from 'react';
import customerContext from 'components/context/customerContext'

import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
  } from 'antd';
  
function CreateCustomer() {
  const {customer} = useContext(customerContext);
  const { Option } = Select;
    const [componentSize, setComponentSize] = useState('large');
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
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
        <Form.Item label="Name">
          <Input value={customer.name}/>
        </Form.Item>
        <Form.Item label="Surname">
          <Input value={customer.surname}/>
        </Form.Item>
        <Form.Item label="Phone">
          <Input value={customer.phone}/>
        </Form.Item>
        <Form.Item label="Email">
          <Input value={customer.email}/>
        </Form.Item>
        <Form.Item label="Birth date">
          <DatePicker value={customer.birthdate}/>
        </Form.Item>
        <Form.Item label="Communication">
        <Select placeholder="Please select a communication type">
          <Option value="china">SMS</Option>
          <Option value="usa">Email</Option>
        </Select>
        </Form.Item>        
        <Form.Item>
          <Button type="primary" className="btn-create" block>Create</Button>
        </Form.Item>
      </Form>
        </div>
    )
}

export default CreateCustomer

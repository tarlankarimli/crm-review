import React, { useState, useContext } from 'react';
import customerContext from 'components/context/customerContext';
import { create } from 'api/ContactApi'
import { useHistory } from 'react-router'

import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
  } from 'antd';
  
function CreateCustomer() {
  const {customer} = useContext(customerContext);
  const history = useHistory();
  const { Option } = Select;
    const [componentSize, setComponentSize] = useState('large');
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };

    let formSubmit = (rawData) => {
      //console.log('OK', data, customer)

      let data = {
        name: rawData.name,
        surname: rawData.surname,
        email: rawData.email,
        phoneNumber: rawData.phoneNumber,
        birthDate: formatDate(rawData.birthDate),
        preferredCommunication: rawData.communicationType
      }
      create(data)
          .then((_) => {
            history.push('/Customer')
          })
    }

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    let formatDate = (date) => {
      let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2)
        month = '0' + month;
      if (day.length < 2)
        day = '0' + day;

      return [year, month, day].join('-');
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
        onFinish={formSubmit}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="Name" name="name" rules={[
          {
            required: true,
            message: 'Please input name!',
          },
        ]}>
          <Input value={customer.name}/>
        </Form.Item>
        <Form.Item label="Surname" name="surname" rules={[
          {
            required: true,
            message: 'Please input surname!',
          },
        ]}>
          <Input value={customer.surname}/>
        </Form.Item>
        <Form.Item label="Phone" name="phoneNumber" rules={[
          {
            required: true,
            message: 'Please input phone number!',
          },
        ]}>
          <Input value={customer.phone}/>
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="email" value={customer.email}/>
        </Form.Item>
        <Form.Item label="Birth date" name="birthDate">
          <DatePicker value={customer.birthDate}/>
        </Form.Item>
        <Form.Item label="Communication" name="communicationType">
        <Select placeholder="Please select a communication type">
          <Option value="SMS">SMS</Option>
          <Option value="EMAIL">Email</Option>
        </Select>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" className="btn-create" block>Create</Button>
        </Form.Item>
      </Form>
        </div>
    )
}

export default CreateCustomer

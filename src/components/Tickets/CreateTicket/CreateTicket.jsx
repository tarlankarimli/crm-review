import React, { useState, useContext } from 'react';
import ticketContext from 'components/context/ticketContext'

import {
  Form,
  Input,
  Button,
  DatePicker,
  Spin, Select,
} from 'antd';
  
function CreateTicket() {
  const {ticket} = useContext(ticketContext);
  const { Option } = Select;

  let spin = {loading: true};
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
        initialValues={{ size: "size" }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="Priority" name="priority">
          <Select placeholder="Please select a ticket priority">
            <Option value="LOW">LOW</Option>
            <Option value="MEDIUM">MEDIUM</Option>
            <Option value="HIGH">HIGH</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Category">
          <Input value={ticket.category}/>
        </Form.Item>
        <Form.Item label="Header">
          <Input value={ticket.header}/>
        </Form.Item>
        <Form.Item label="Description">
          <Input value={ticket.description}/>
        </Form.Item>
        <div className="customer-input">
          <Form.Item label="Customer">
          <Input value={ticket.customer}/>
        </Form.Item>
        <Spin className="load-spin"/>
        </div>
        <Form.Item label="Status">
          <Input value={ticket.status}/>
        </Form.Item>     
        <Form.Item>
          <Button type="primary" className="btn-create" block>Create</Button>
        </Form.Item>
      </Form>
        </div>
    )
}

export default CreateTicket

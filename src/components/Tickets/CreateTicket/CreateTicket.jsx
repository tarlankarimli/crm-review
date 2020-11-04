import React, { useState, useContext } from 'react';
import ticketContext from 'components/context/ticketContext'

import {
    Form,
    Input,
    Button,
    DatePicker,
  } from 'antd';
  
function CreateTicket() {
  const {ticket} = useContext(ticketContext);
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
        <Form.Item label="Priority">
          <Input value={ticket.priority}/>
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
        <Form.Item label="Customer">
          <Input value={ticket.customer}/>
        </Form.Item>
        <Form.Item label="Created">
          <DatePicker value={ticket.created}/>
        </Form.Item>
        <Form.Item label="updated">
          <DatePicker value={ticket.updated}/>
        </Form.Item>  
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

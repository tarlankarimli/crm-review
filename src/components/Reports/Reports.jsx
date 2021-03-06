import React, { useState } from 'react';
import { Table, Form, Button } from 'antd';
import { Link } from 'react-router-dom';



const originData = [];

  originData.push({
    id: `8`,
    name: `test`,
    basedOn: `test`,
  });


const Reports = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);


  const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    width: '10%',
    editable: true,
  },
  {
    title: 'name',
    dataIndex: 'name',
    width: '35%',
    editable: true,
  },
  {
      title: 'Based on',
      dataIndex: 'basedOn',
      width: '35%',
      editable: true,
    }, 
    {
      key: 'action',
      render: (record) => <Link to="/Edit/Ticket"><Button type="primary" size="large">Export</Button></Link>,
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        input: col.dataIndex === 'birthdate' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
      }),
    };
  });
  return (
    <>
      <Form form={form} component={false}>
        <Table
          bordered
          dataSource={data}
          columns={mergedColumns}
        />
      </Form>
    </>
  );

};

export default Reports;
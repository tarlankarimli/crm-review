import React, { useState, useEffect } from 'react';
import { Table, Form } from 'antd';
import { DeleteOutlined, EditOutlined, BellOutlined, EyeOutlined } from '@ant-design/icons';
import Details from '../Modals/Details';
import { Link } from 'react-router-dom';
import * as CustomerApi from 'api/ContactApi';


const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    CustomerApi
        .getCustomers()
        .then(resp => {
          setData(resp.data.object);
        })
        .catch();
  }, [])

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
      width: '20%',
      editable: true,
    },
    {
      title: 'surname',
      dataIndex: 'surname',
      width: '20%',
      editable: true,
    },
    {
      title: 'phone',
      dataIndex: 'phoneNumber',
      width: '20%',
      editable: true,
    }, {
      title: 'details',
      key: 'action',
      render: (record) => <a><EyeOutlined onClick={()=> {
        setVisible(record)
      }}/></a>,
    },
    {
      title: 'edit',
      key: 'action',
      render: (record) => <Link to="/Edit/Customer/"><EditOutlined/></Link>,
    },
    {
      title: 'delete',
      key: 'action',
      render: () =>
        <a><DeleteOutlined/></a>,
    },
    {
      title: 'tickets',
      key: 'tickets',
      render: (record) => <Link to={`/Customer/Ticket/${record.id}`}><BellOutlined /></Link>,
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
      <Details 
          visible={visible}
          setVisible = {setVisible}
          name="Customer name"
          data ={setVisible}
          />
    </>
  );

};

export default EditableTable;
import React, { useState } from 'react';
import { Table, Form } from 'antd';
import { DeleteOutlined, EditOutlined, BellOutlined, EyeOutlined } from '@ant-design/icons';
import Details from '../Modals/Details';
import { Link } from 'react-router-dom';



const originData = [];

originData.push({
  id: `1`,
  name: `Edrward`,
  surname: `Norton`,
  phone: `+9942222222`,
  email: `Norton@gmail.com`,
  birthdate: `29.06.1994`,
  communication: `SMS`,
});


const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [visible, setVisible] = useState(false)


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
      dataIndex: 'phone',
      width: '20%',
      editable: true,
    }, {
      title: 'details',
      key: 'action',
      render: () => <a><EyeOutlined onClick={()=> {
        setVisible(true)
      }}/></a>,
    },
    {
      title: 'edit',
      key: 'action',
      render: (record) => <Link to="/Edit/Customer"><EditOutlined onClick={()=> {

      }}/></Link>,
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
      render: () => <Link to="/Customer/Ticket"><BellOutlined /></Link>,
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
          data ={data}
          />
    </>
  );

};

export default EditableTable;
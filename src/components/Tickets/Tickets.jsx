import React, { useState } from 'react';
import { Table, Form } from 'antd';
import {DeleteOutlined,EditOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';



const originData = [];

  originData.push({
    id: `1`,
    priority: `LOW`,
    category: `food`,
    header: `report`,
    description: `description descriptioneded`,
    customer: `customer customer`,
    created : `29.06.2020`,
    updated : `29.07.2020`,
    status: `OPENED`,
  });


const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);


  const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    width: '5%',
    editable: true,
  },
  {
    title: 'priority',
    dataIndex: 'priority',
    width: '15%',
    editable: true,
  },
  {
      title: 'category',
      dataIndex: 'category',
      width: '15%',
      editable: true,
    },
    {
      title: 'header',
      dataIndex: 'header',
      width: '15%',
      editable: true,
    },
    {
      title: 'description',
      dataIndex: 'description',
      width: '20%',
      editable: true,
    },
    {
      title: 'customer',
      dataIndex: 'customer',
      width: '15%',
      editable: true,
    },
  {
    title: 'created',
    dataIndex: 'created',
    width: '10%',
    editable: true,
  },
  {
      title: 'updated',
      dataIndex: 'updated',
      width: '10%',
      editable: true,
    },
  {
    title: 'status',
    dataIndex: 'status',
    width: '15%',
    editable: true,
  }, 
    {
      title: 'edit',
      key: 'action',
      render: (record) => <Link to="/Edit/Ticket"><EditOutlined onClick={()=> {

      }}/></Link>,
    },
    {
      title: 'delete',
      key: 'action',
      render: () =>
        <a><DeleteOutlined/></a>,
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

export default EditableTable;
import React, { useState } from 'react';
import { Table, Input, InputNumber, Form } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';


const originData = [];

originData.push({
  id: `1`,
  priority: `HIGH`,
  category: `phone`,
  header: `report`,
  description: `description `,
  created: `14.06.2019`,
  updated: `02.07.2020`,
  status: `WAITING`,
});

const EditableCell = ({
  editing,
  dataIndex,
  title,
  input,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = input === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
          children
        )}
    </td>
  );
};

const CustomerTicket = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      id: '',
      priority: '',
      category: '',
      header: '',
      description: '',
      created: '',
      updated: '',
      status: '',
      ...record,
    });
    setEditingKey(record.key);
  };

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
      render: () => <a><EditOutlined /></a>,
    },
    {
      title: 'delete',
      key: 'action',
      render: () => <a href="void(0)"><DeleteOutlined /></a>,
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
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
      />
    </Form>
  );
};

export default CustomerTicket;
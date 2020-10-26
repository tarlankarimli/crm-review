import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
import {DeleteOutlined,EditOutlined,BellOutlined} from '@ant-design/icons';


const originData = [];

  originData.push({
    id: `1`,
    priority: `HIGH`,
    category: `phone`,
    header: `report`,
    description: `description `,
    created : `14.06.2019`,
    updated : `02.07.2020`,
    status: `WAITING`,
  });

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
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

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
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
      title: 'created at',
      dataIndex: 'created',
      width: '10%',
      editable: true,
    },
    {
        title: 'updated at',
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
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <a disabled={editingKey !== ''} onClick={() => edit(record)}>
            <EditOutlined/>
          </a>
        );
      },
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
        inputType: col.dataIndex === 'birthdate' ? 'number' : 'text',
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
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default CustomerTicket;
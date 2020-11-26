import React, {useEffect, useState} from 'react';
import { Table, Input, InputNumber, Form } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useRouteMatch } from 'react-router'
import * as CustomerApi from "../../../api/ContactApi";

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
  const routeMatch = useRouteMatch();
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  useEffect(() => {
    //console.log(routeMatch, history)
    CustomerApi
        .getCustomerTickets(routeMatch.params.id)
        .then(resp => {
          setData(resp.data.object);
        })
        .catch();
  }, [])

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
import React, { useState } from 'react';
import { Table, Input, InputNumber, Form } from 'antd';
import { DeleteOutlined, EditOutlined, BellOutlined, EyeOutlined  } from '@ant-design/icons';
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
     
    </td>
  );
};

const EditableTable = () => {
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
    },{
      title: 'details',
      key: 'action',
      render: () => <a><EyeOutlined  /></a>,
    },
    {
      title: 'edit',
      key: 'action',
      render: () => <a><EditOutlined /></a>,
    },
    {
      title: 'delete',
      key: 'action',
      render: () => <a><DeleteOutlined /></a>,
    },
    {
      title: 'tickets',
      key: 'tickets',
      render: () => <Link to="/CustomerTicketTable"><BellOutlined /></Link>,
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
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        bordered
        dataSource={data}
        columns={mergedColumns}
      />
    </Form>
  );
};

export default EditableTable;
import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import DashboardContent from '../components/DashboardContent/DashboardContent';
import CustomerTicketTable from '../components/Customer/CustomerTicketTable/CustomerTicketTable';
import Create from '../components/Customer/CreateCustomer'
import Edit from '../components/Customer/CreateCustomer'

import Tickets from '../components/Tickets';
import Customer from '../components/Customer/Customer';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  HomeOutlined,
  BellOutlined,
  FileTextOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
function Main() {
  const [collapsed, setCollapsed] = useState(false);
  const [menu, setMenu] = useState('Dashboard');
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="main">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo"><h3 onClick={() => { setMenu('Dashboard') }}>CRM</h3></div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['Dashboard']}
          onClick={({ key }) => { setMenu(key) }}
          selectedKeys={[menu]}>
          <Menu.Item key="Dashboard" icon={<HomeOutlined />}>
            <Link to="/Dashboard">
              Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item key="Customer" icon={<UserOutlined />}>
            <Link to = "/Customer">
            Customers
            </Link>
            </Menu.Item>
          <Menu.Item key="Tickets" icon={<BellOutlined />}>
          <Link to = "/Tickets">
            Tickets
            </Link>
            </Menu.Item>
          <Menu.Item key="Reports" icon={<FileTextOutlined />}>
            Reports
            </Menu.Item>
          <Menu.Item key="MAIL" icon={<MailOutlined />}>
            SMS / MAIL
            </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            minHeight: 280,
          }}
        >
          {/* <DashboardContent /> */}
          <Switch>
            <Route exact path="/Dashboard">
              <DashboardContent />
            </Route>
            <Route exact path="/Customer">
              <Customer />
            </Route>
            <Route exact path="/Tickets">
              <Tickets />
            </Route>
            <Route exact path="/Customer/Ticket">
              <CustomerTicketTable />
            </Route>
            <Route exact path="/Create/Customer">
              <Create title="Create customer"/>
            </Route>
            <Route exact path="/Edit/Customer">
              <Edit title="Edit customer"/>
            </Route>
            <Redirect to="/Dashboard" />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Main

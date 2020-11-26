import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import DashboardContent from '../components/DashboardContent/DashboardContent';
import CustomerTicketTable from '../components/Customer/CustomerTicketTable/CustomerTicketTable';
import CreateCustomer from '../components/Customer/CreateCustomer';
import EditCustomer from '../components/Customer/CreateCustomer';
import CreateTicket from 'components/Tickets/CreateTicket/';
import EditTicket from 'components/Tickets/CreateTicket/';
import Reports from 'components/Reports/';
import Communication from 'components/Communication/';

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

const { Sider, Content } = Layout;
function Main() {
  const [collapsed, setCollapsed] = useState(false);
  const [menu, setMenu] = useState('Dashboard');

  return (
    <Layout className="main">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" onClick={() => { setMenu('Dashboard') }}>
          <div className = "logo-title">ƏJDAHA<br/><span>dönər</span></div>
        </div>
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
            <Link to="/Customer">
              Customers
            </Link>
          </Menu.Item>
          <Menu.Item key="Tickets" icon={<BellOutlined />}>
            <Link to="/Tickets">
              Tickets
            </Link>
          </Menu.Item>
          <Menu.Item key="Reports" icon={<FileTextOutlined />}>
            <Link to="/Reports">
              Reports
            </Link>
          </Menu.Item>
          <Menu.Item key="MAIL" icon={<MailOutlined />}>
            <Link to="/Communication">
              SMS / MAIL
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
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
            <Route exact path="/Customer/Ticket/:id">
              <CustomerTicketTable />
            </Route>
            <Route exact path="/Create/Customer">
              <CreateCustomer title="Create customer" />
            </Route>
            <Route exact path="/Edit/Customer">
              <EditCustomer title="Edit customer" />
            </Route>
            <Route exact path="/Create/Ticket">
              <CreateTicket title="Create ticket" />
            </Route>
            <Route exact path="/Edit/Ticket">
              <EditTicket title="Edit ticket" />
            </Route>
            <Route exact path="/Reports">
              <Reports />
            </Route>
            <Route exact path="/Communication">
              <Communication />
            </Route>
            <Redirect to="/Dashboard" />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Main

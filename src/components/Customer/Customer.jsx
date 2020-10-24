import React from 'react';
import { Tabs } from 'antd';
import CustomerTable from '../Customer/CustomerTable/CustomerTable'

const { TabPane } = Tabs;

function Customer() {
    return (
        <div className="customer">
            <div className="card-container">
                <Tabs type="card">
                    <TabPane tab="Customers" key="1">
                        <CustomerTable />
                    </TabPane>
                    <TabPane tab="Details" key="2">
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                    </TabPane>
                    <TabPane tab="Ticket" key="3">
                        <p>Content of Tab Pane 3</p>
                        <p>Content of Tab Pane 3</p>
                        <p>Content of Tab Pane 3</p>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default Customer

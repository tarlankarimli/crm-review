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
                </Tabs>
            </div>
        </div>
    )
}

export default Customer

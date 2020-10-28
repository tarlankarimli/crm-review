import React from 'react';
import { Tabs,Button  } from 'antd';
import CustomerTable from '../Customer/CustomerTable/CustomerTable';
const { TabPane } = Tabs;
const size ="large";

function Customer() {
    return (
        <div className="customer">
            <div className="card-container">
            <Button type="primary" className="create-customer" size={size}>
          Create new
        </Button>
                <Tabs type="card" size={size}>
                    <TabPane tab="Customers" key="1">
                        <CustomerTable />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default Customer

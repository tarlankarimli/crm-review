import React from 'react';
import { Tabs, Button } from 'antd';
import { Link } from 'react-router-dom';
import CustomerTable from '../Customer/CustomerTable/CustomerTable';
const { TabPane } = Tabs;
const size = "large";

function Customer() {
    return (
        <div className="view-container">
            <div className="card-container">
                <Link to="/Create/Customer">
                    <Button type="primary" className="create-new" size={size}>
                        Create new
                     </Button>
                </Link>
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

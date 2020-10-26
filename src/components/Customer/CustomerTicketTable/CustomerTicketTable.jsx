import React from 'react';
import { Tabs } from 'antd';
import CustomerTicket from '../CustomerTicketTable/CustomerTicket';

const { TabPane } = Tabs;

function CustomerTicketTable() {
    return (
        <div className="customer">
            <div className="card-container">
                <Tabs type="card">
                    <TabPane tab="Customer tickets" key="2">
                        <CustomerTicket />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default CustomerTicketTable;

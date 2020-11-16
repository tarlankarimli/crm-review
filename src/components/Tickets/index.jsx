import React from 'react';
import { Tabs, Button } from 'antd';
import { Link } from 'react-router-dom';
import Tickets from './Tickets';
const { TabPane } = Tabs;
const size = "large";

function index() {
    return (
        <div className="view-container">
            <div className="card-container">
                <Link to="/Create/Ticket">
                    <Button type="primary" className="create-new" size ="large">
                        Create new
                     </Button>
                </Link>
                <Tabs type="card" size={size}>
                    <TabPane tab="Tickets" key="4">
                        <Tickets />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default index

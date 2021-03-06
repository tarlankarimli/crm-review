import React from 'react';
import { Tabs } from 'antd';
import Reports from './Reports';
const { TabPane } = Tabs;
const size = "large";

function index() {
    return (
        <div className="view-container">
            <div className="card-container">
                <Tabs type="card" size={size}>
                    <TabPane tab="Reports" key="5">
                        <Reports />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default index

import React from 'react';
import Communication from './Communication'
import { Tabs  } from 'antd';
const { TabPane } = Tabs;
const size ="large";


function index() {
    return (
        <div className="view-container">
            <div className="card-container">
                <Tabs type="card" size={size}>
                    <TabPane tab="Communication" key="6">
                        <Communication />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default index;

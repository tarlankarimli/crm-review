import React from 'react';
import Create from './CreateTicket'
import { Tabs  } from 'antd';
const { TabPane } = Tabs;
const size ="large";


function index({title}) {
    return (
        <div className="view-container">
            <div className="card-container">
                <Tabs type="card" size={size}>
                    <TabPane tab={title} key="4">
                        <Create />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default index;

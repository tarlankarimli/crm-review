import React from 'react';
import Create from './CreateCustomer'
import { Tabs  } from 'antd';
const { TabPane } = Tabs;
const size ="large";


function index({title}) {
    return (
        <div className="customer">
            <div className="card-container">
                <Tabs type="card" size={size}>
                    <TabPane tab={title} key="3">
                        <Create />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default index;

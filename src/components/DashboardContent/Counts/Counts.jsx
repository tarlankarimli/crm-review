import React from 'react';
import { Card } from 'antd';

function Counts() {
    return (
        <div className="site-card-border-less-wrapper">
            <Card title="CUSTOMERS COUNTS" size="small" bordered={false} className="counts-card">
                <p>15</p>
            </Card>
        </div>
    );
}

export default Counts

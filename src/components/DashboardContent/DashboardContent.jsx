import React from 'react';
import { Layout } from "antd";
import Counts from './Counts/Counts'

const { Content } = Layout;

function DashboardContent() {
    return (
        <div>
            <Content >
                <div className="counts">
                    <div className="counts_left">
                        <Counts />
                        <Counts />
                    </div>
                    <h3>sdsd</h3>
                </div>
                <div className="counts_down">
                    <Counts />
                    <Counts />
                    <Counts />
                </div>

            </Content>
        </div>
    )
}

export default DashboardContent

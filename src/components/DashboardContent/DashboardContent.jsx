import React from 'react';
import { Layout } from "antd";
import Counts from './Counts/Counts'

const { Content } = Layout;

function DashboardContent() {
    return (
        <div>
            <Content>
                <Counts/>
            </Content>
        </div>
    )
}

export default DashboardContent

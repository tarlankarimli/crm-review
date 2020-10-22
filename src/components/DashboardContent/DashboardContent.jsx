import React from 'react';
import { Layout } from "antd";
import Counts from './Counts/Counts';
import Chart from './Chart/Chart'


const { Content } = Layout;

function DashboardContent() {
    return (
        <Content >
            <div className="counts">
                <div className="counts_left">
                    <Counts titleCard="CUSTOMER" />
                    <Counts titleCard="TICKET" />
                </div>
                <div className="chart-container">
                    <Chart />
                </div>
            </div>
            <div className="counts_down">
                <Counts titleCard="OPEN TICKET" />
                <Counts titleCard="CLOSED TICKET" />
                <Counts titleCard="WAITING TICKET" />
            </div>
        </Content>
    )
}

export default DashboardContent

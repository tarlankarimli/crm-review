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
                        <Counts titleCard="CUSTOMER COUNT"/>
                        <Counts titleCard="TICKET COUNT"/>
                    </div>
                    <Chart/>
                </div>
                <div className="counts_down">
                    <Counts titleCard="OPEN TICKET COUNT"/>
                    <Counts titleCard="CLOSED TICKET COUNT"/>
                    <Counts titleCard="WAITING TICKET COUNT"/>
                </div>
            </Content>
    )
}

export default DashboardContent

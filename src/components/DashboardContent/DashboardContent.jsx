import React from 'react';
import { Layout } from "antd";
import Counts from './Counts/Counts';
import Chart from './Chart/Chart'


const { Content } = Layout;

function DashboardContent() {
    return (
        <Content >
            {/* <div className="counts">
                <div className="counts_left">
                    <Counts titleCard="CUSTOMERS" />
                    <Counts titleCard="PRODUCTS" />
                </div>
                <div className="chart-container">
                    <Chart />
                </div>
            </div>
            <div className="counts_down">
                <Counts titleCard="WAITING TICKETS" />
                <Counts titleCard="SOLVED TICKETS" />
                <Counts titleCard="TOTAL TICKETS" />
            </div> */}
            <div className="grid-container">
                <div className="customer">
                    <Counts titleCard="CUSTOMERS" />
                </div>
                <div className="product">
                    <Counts titleCard="PRODUCTS" />
                </div>
                <div className="opened">
                    <Counts titleCard="OPENED TICKETS" />
                </div>
                <div className="solved">
                    <Counts titleCard="SOLVED TICKETS" />
                </div>
                <div className="waiting">
                    <Counts titleCard="WAITING TICKETS" />
                </div>
                <div className="total">
                    <Counts titleCard="TOTAL TICKETS" />
                </div>
                <div className="db-chart">
                    <Chart/>
                </div>
            </div>

        </Content>
    )
}

export default DashboardContent

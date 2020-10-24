import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';

function Chart() {
    const [chartData, setChartData] = useState({})

const chart = () => {
    setChartData({
        labels: ['customer', 'ticket', 'open ticket', 'closed ticket','waiting ticket'],
        datasets: [
            {
                label: 'level of bla bla',
                data: [45,25,10,35,15],
                backgroundColor: ['rgba(75,192,192,0.6'],
                borderWidth: 4
            }
        ]
    })
}
useEffect(()=> {
    chart()
}, [])

    return (
        <div>
            <Line data={chartData} options={{
                responsive: true,
                title: {text: 'Thickness scale', display: true},
                scales: {
                    yAxes:  [
                        {
                            ticks: {
                                autoSkip: true,
                                maxTicksLimit: 10,
                                beginAtZero: true
                            },
                            gridLines: {
                                display: false
                            }
                        }
                    ]
                }
            }}/>
        </div>
    )
}

export default Chart

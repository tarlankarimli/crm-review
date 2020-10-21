import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';

function Chart() {
    const [chartData, setChartData] = useState({})

const chart = () => {
    setChartData({
        labels: ['monday', 'tuesday', 'wednesday', 'thursday','friday'],
        datasets: [
            {
                label: 'level of bla bla',
                data: [32,45,12,79,69],
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
            <Bar data={chartData} options={{
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

import React from 'react'
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';

function DataGraph() {
    const state = useSelector(state => state)
    return (
        <div className="mb-5">
            <h3 className="text-center">TOTAL INFECTED &amp; DEATHS</h3>
            {state.data ? (
                <Bar
                    data={{
                        labels: state.data.map(({ state }) => state),
                        datasets: [{
                            data: state.data.map((data) => data.positive),
                            label: 'Infected',
                            borderColor: 'green',
                            backgroundColor: "#27AE60",
                            fill: true,
                        }, {
                            data: state.data.map((data) => data.death),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.5)',
                            fill: true,
                        },
                        ],
                    }}
                />
            ) : null}
        </div>
    )
}

export default DataGraph

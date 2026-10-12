import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

function BarChart({ labels = [], data = [] }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const chart = new Chart(canvasRef.current, {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels,
                datasets: [
                    {
                        label: 'Percent',
                        data,
                        backgroundColor: 'rgb(30 30 30 / 90%)',
                        borderColor: 'rgb(30 30 30 / 90%)',
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                    datalabels: {
                        anchor: 'end',
                        align: 'top',
                        formatter: (value) => `${value}%`,
                        font: {
                            weight: 'bold',
                        },
                    },
                },
            },
        });

        return () => chart.destroy();
    }, [labels, data]);

    return (
        <div>
            <canvas ref={canvasRef} />
        </div>
    );
}

BarChart.propTypes = {
    checkPercentValue: ({ data }) => {
        const invalidValue = data.find((value) => value < 0 || value > 100);

        if (invalidValue !== undefined) {
            return new Error('each data value must be between 0 and 100');
        }
    },
};

export default BarChart;

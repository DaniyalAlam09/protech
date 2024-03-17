import React from 'react';
import ReactApexChart from 'react-apexcharts';

const MyChart = ({ data }) => {
    // Prepare data for ApexCharts
    const chartData = {
        options: {
            chart: {
                type: 'line',
            },
            xaxis: {
                categories: ['1', '2', '3', '4'], // You can customize labels according to your data
            },
        },
        series: data.map(item => ({
            name: item.tag,
            data: item.values.map(value => parseInt(value.value)),
        })),
    };

    return <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />;
};

export default MyChart;

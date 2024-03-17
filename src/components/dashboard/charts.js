import React from 'react';
import MyChart from './hodStats';

const Charts = () => {
    const data = [
        {
            tag: 'tt01',
            values: [
                { value: '001' },
                { value: '40' },
                { value: '100' },
                { value: '90' },
            ],
        }, {
            tag: 'tt022',
            values: [
                { value: '98' },
                { value: '12' },
                { value: '67' },
                { value: '98' },
            ],
        }, {
            tag: 'tt04',
            values: [
                { value: '12' },
                { value: '3' },
                { value: '8' },
                { value: '0' },
            ],
        },
        // Add more data objects as needed
    ];

    return (
        <div>
            <h1>Multi-line Chart Example</h1>
            <MyChart data={data} />
        </div>
    );
};

export default Charts;

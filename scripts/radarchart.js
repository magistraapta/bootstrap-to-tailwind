// <block:setup:1>
const data = {
    labels: [
        'Design',
        'Code',
        'Soft Skills',
        'Business',
        'title',
        'title',
        'title'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [42, 23, 45, 43, 0, 0, 0],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
};
// </block:setup>

// <block:config:0>
const config = {
    type: 'radar',
    data: data,
    options: {
        elements: {
            line: {
                borderWidth: 3
            }
        }
    },
};
// </block:config>

module.exports = {
    actions: [],
    config: config,
};
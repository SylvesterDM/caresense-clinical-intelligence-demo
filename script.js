const ctx = document.getElementById('heartRateChart');

new Chart(ctx, {
    type: 'line',

    data: {
        labels: [
            '8:00 AM',
            '9:00 AM',
            '10:00 AM',
            '11:00 AM',
            '12:00 PM',
            '1:00 PM',
            '2:00 PM'
        ],

        datasets: [{
            label: 'Heart Rate (bpm)',

            data: [
                72,
                74,
                73,
                78,
                82,
                79,
                76
            ],

            tension: 0.35
        }]
    },

    options: {
        responsive: true,

        plugins: {
            legend: {
                display: true
            }
        },

        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Heart Rate (bpm)'
                }
            },

            x: {
                title: {
                    display: true,
                    text: 'Time'
                }
            }
        }
    }
});

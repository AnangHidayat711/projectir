const config22 = {
    type: 'bar',
    data: {
        labels: ['Attractions', 'Amenities', 'Access', 'Price', 'No Aspect'],
        datasets: [{
            label: 'Rerata Jumlah Kalimat per Review',
            data: [3.5492, 4.2459, 3.2434, 3.3409, 3.0234],
            backgroundColor: ['#Fc766A', '#5b84b1', '#9dbdbA', '#F8b042', '#fab9b6'],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Aspek'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Rerata Jumlah Kalimat per Review'
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
};
const config22 = {
    type: 'bar',
    data: {
        labels: ['Attractions', 'Amenities', 'Access', 'Price', 'No Aspect'],
        datasets: [{
            label: 'Rata-Rata Jumlah Kalimat per Review',
            data: [3.5492, 4.2459, 3.2434, 3.3409, 3.0234],
            backgroundColor: ['#Fc766A', '#5b84b1', '#9dbdbA', '#F8b042', '#fab9b6'],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis:'y',
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Rata-Rata Jumlah Kalimat per Review'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Aspek'
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

const config21 = {
    type: 'bar',
    data: {
        labels: ['Attractions', 'Amenities', 'Access', 'Price', 'No Aspect'],
        datasets: [{
            label: 'Rerata Jumlah Kata per Review',
            data: [3.276546, 1.558343, 1.096849, 1.146441, 1.405484],
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
                    text: 'Rerata Jumlah Kata per Review'
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
const config28 = {
    type: 'bar',
    data: {
        labels: ['Attractions', 'Amenities', 'Access', 'Price', 'No Aspect'],
        datasets: [{
            label: 'Rerata Jumlah Kata per Kalimat Tiap Aspek',
            data: [26.78238, 8.249125, 2.571179, 2.983664, 4.638547],
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
                    text: 'Rerata Jumlah Kata per Kalimat Tiap Aspek'
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
const config00 = {
    type: 'bar',
    data: {
        labels: ['Attractions', 'Amenities', 'Access', 'Price', 'No Aspect'],
        datasets: [{
            label: 'Jumlah Review per Aspek',
            data: [1438, 437, 105, 130, 376],
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
                    text: 'Aspek'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Jumlah Review per Aspek'
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        },
    }
};

const config01 = {
    type: 'bar',
    data: {
        labels: ['Positif', 'Negatif', 'Netral'],
        datasets: [{
            label: 'Jumlah Review per Sentimen',
            data: [1244, 170, 24],
            backgroundColor: ['lightskyblue', 'lightsalmon', 'lightgreen'],
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
                    text: 'Sentimen'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Jumlah Review per Sentimen'
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

const config02 = {
    type: 'bar',
    data: {
        labels: ['Positif', 'Negatif', 'Netral'],
        datasets: [{
            label: 'Jumlah Review',
            data: [373, 36, 28],
            backgroundColor: ['lightskyblue', 'lightsalmon', 'lightgreen'],
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
                    text: 'Sentimen'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Jumlah Review'
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

const config03 = {
    type: 'bar',
    data: {
        labels: ['Positif', 'Negatif', 'Netral'],
        datasets: [{
            label: 'Jumlah Review',
            data: [74, 13, 18],
            backgroundColor: ['lightskyblue', 'lightsalmon', 'lightgreen'],
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
                    text: 'Sentimen'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Jumlah Review'
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

const config04 = {
    type: 'bar',
    data: {
        labels: ['Positif', 'Negatif', 'Netral'],
        datasets: [{
            label: 'Jumlah Review',
            data: [102, 12, 11],
            backgroundColor: ['lightskyblue', 'lightsalmon', 'lightgreen'],
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
                    text: 'Sentimen'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Jumlah Review'
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

const config05 = {
    type: 'bar',
    data: {
        labels: ['Positif', 'Negatif', 'Netral'],
        datasets: [{
            label: 'Jumlah Review',
            data: [161, 27, 188],
            backgroundColor: ['lightskyblue', 'lightsalmon', 'lightgreen'],
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
                    text: 'Sentimen'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Jumlah Review'
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
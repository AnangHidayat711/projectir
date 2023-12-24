const selected1 = document.querySelector(".selected-1");
const optionsContainer1 = document.querySelector(".dropdown-options-container-1");

const optionsList1 = document.querySelectorAll(".option-1");

selected1.addEventListener("click", () => {
  optionsContainer1.classList.toggle("active");
});

optionsList1.forEach(o => {
  o.addEventListener("click", () => {
    selected1.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer1.classList.remove("active");
    changeChart();
  });
});

const selected2 = document.querySelector(".selected-2");
const optionsContainer2 = document.querySelector(".dropdown-options-container-2");

const optionsList2 = document.querySelectorAll(".option-2");

selected2.addEventListener("click", () => {
  optionsContainer2.classList.toggle("active");
});

optionsList2.forEach(o => {
  o.addEventListener("click", () => {
    selected2.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer2.classList.remove("active");
    changeChart();
  });
});

let myChart = new Chart(
  document.getElementById('myChart'),
  config00
);

function changeChart() {
  const selectedOption1 = selected1.innerHTML;
  const selectedOption2 = selected2.innerHTML;

  if (selectedOption1 === 'Jumlah Review per Sentimen') {
    if (selectedOption2 === 'Attractions') {
      updateChart(config01);
    } else if (selectedOption2 === 'Amenities') {
      updateChart(config02);
    } else if (selectedOption2 === 'Access') {
      updateChart(config03);
    } else if (selectedOption2 === 'Price') {
      updateChart(config04);
    } else if (selectedOption2 === 'No Aspect') {
      updateChart(config05);
    }
  } else if (selectedOption1 === 'Jumlah Review per Aspek') {
    updateChart(config00);
  } else if (selectedOption1 === 'Proporsi Label Sentimen') {
    if (selectedOption2 === 'Attractions') {
      updateChart(config06);
    } else if (selectedOption2 === 'Amenities') {
      updateChart(config07);
    } else if (selectedOption2 === 'Access') {
      updateChart(config08);
    } else if (selectedOption2 === 'Price') {
      updateChart(config09);
    } else if (selectedOption2 === 'No Aspect') {
      updateChart(config10);
    }
  } else if (selectedOption1 === 'Rerata Jumlah Kata per Label Sentimen') {
    if (selectedOption2 === 'Attractions') {
      updateChart(config11);
    } else if (selectedOption2 === 'Amenities') {
      updateChart(config12);
    } else if (selectedOption2 === 'Access') {
      updateChart(config13);
    } else if (selectedOption2 === 'Price') {
      updateChart(config14);
    } else if (selectedOption2 === 'No Aspect') {
      updateChart(config15);
    }
  } else if (selectedOption1 === 'Rerata Jumlah Kata Unik per Label Sentimen') {
    if (selectedOption2 === 'Attractions') {
      updateChart(config16);
    } else if (selectedOption2 === 'Amenities') {
      updateChart(config17);
    } else if (selectedOption2 === 'Access') {
      updateChart(config18);
    } else if (selectedOption2 === 'Price') {
      updateChart(config19);
    } else if (selectedOption2 === 'No Aspect') {
      updateChart(config20);
    }
  } else if (selectedOption1 === 'Rerata Jumlah Kata per Review') {
    updateChart(config21);
  } else if (selectedOption1 === 'Rerata Jumlah Kalimat per Review') {
    updateChart(config22);
  } else if (selectedOption1 === 'Rerata Jumlah Kata per Kalimat Tiap Aspek') {
    updateChart(config28);
  } else if (selectedOption1 === 'Top 5 Kemunculan Kata') {
    if (selectedOption2 === 'Attractions') {
      updateChart(config23);
    } else if (selectedOption2 === 'Amenities') {
      updateChart(config24);
    } else if (selectedOption2 === 'Access') {
      updateChart(config25);
    } else if (selectedOption2 === 'Price') {
      updateChart(config26);
    } else if (selectedOption2 === 'No Aspect') {
      updateChart(config27);
    }
  } 
}

function updateChart(config) {
  myChart.destroy();
  myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}

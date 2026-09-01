      import Chart from 'chart.js/auto';


// banner
    (function () {
      document.querySelectorAll('.c-banner__close').forEach(i => {
        i.addEventListener('click', () => {
          const banner = i.parentNode;
          banner.classList.add('collapse');
          // setTimeout(() => {
          //   banner.remove();
          // }, 500); 
          banner.addEventListener('transitionend', (e) => {
            if(e.target === banner ) {
              banner.remove()
            }
          });
        });
      });
    })();


    // chart
  const ctx = document.getElementById('example-chart');

  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['يناير', 'فبراير', 'مارس', 'ابريل', 'ماي', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
      datasets: [{
        label: 'مبيعات الشهر',
        data: [423, 534, 1200, 122, 644, 322, 1240, 1630, 234, 422, 543, 123],
        borderColor: '#2541b2',
        backgroundColor: 'Transparent',
        lineTension: 0.2
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false 
        },
      },
      scales: {
        y: {
          beginAtZero: true
        },
        x: {
          position: 'top'
        },
      }
    }
  });

  const navigation = document.querySelector('.c-table__navigation');
  const randomArray = (myLength, max) => Array.from({length: myLength}, () => Math.round(Math.random() * max))


  navigation.addEventListener('click', () => {
    chart.data.datasets[0].data = randomArray(12, 1800);
    chart.update();
  });


  //  tabs

      (function() {
    const tabs = document.querySelectorAll('.js-tabs-tab');
    const datas = document.querySelectorAll('.js-tabs-tabarea');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(i => i.classList.remove('active'));
        datas.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const tabindex = tab.getAttribute('data-tab-index');
        const tabareas = document.querySelectorAll(`.js-tabs-tabarea[data-content-index="${tabindex}"]`).forEach(tabarea =>
        {
          tabarea.classList.add('active');
        });
      });
    });
    
    })();




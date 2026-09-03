const ctx = document.getElementById('heartRateChart');

if (ctx) {
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
        data: [72, 74, 73, 78, 82, 79, 76],
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
}


// Load synthetic resident monitoring data
fetch('./residents.json')
  .then(response => {

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  })

  .then(residents => {

    const tableBody =
      document.getElementById('residentTableBody');

    if (!tableBody) {
      throw new Error('residentTableBody not found');
    }

    tableBody.innerHTML = '';

    residents.forEach(resident => {

      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${resident.name}</td>
        <td>${resident.room}</td>
        <td>${resident.heartRate} bpm</td>
        <td>${resident.location}</td>
        <td>
          <span class="status ${resident.status.toLowerCase()}">
            ${resident.status}
          </span>
        </td>
      `;

      tableBody.appendChild(row);
    });

    console.log('Resident data loaded successfully');
  })

  .catch(error => {
    console.error(
      'Error loading resident data:',
      error
    );
  });

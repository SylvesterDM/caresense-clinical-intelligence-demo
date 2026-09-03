// Load synthetic resident monitoring data
fetch('residents.json')
  .then(response => response.json())
  .then(residents => {

    const tableBody = document.getElementById('residentTableBody');

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

  })
  .catch(error => {
    console.error('Error loading resident data:', error);
  });

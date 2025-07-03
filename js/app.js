// Einfaches Array, um Hardware-Daten im Browser zu speichern
const hardwareItems = [];

// Formular-Handling
const form = document.getElementById('hardwareForm');
const tableBody = document.querySelector('#hardwareTable tbody');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;
    const serial = document.getElementById('serial').value;

    const item = { name, type, serial };
    hardwareItems.push(item);

    addItemToTable(item);
    form.reset();

    // Hier könnte ein AJAX-Aufruf erfolgen, um die Daten an einen Server zu senden
    // Beispiel: fetch('/api/hardware', { method: 'POST', body: JSON.stringify(item) })
});

function addItemToTable(item) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.type}</td>
        <td>${item.serial}</td>
    `;
    tableBody.appendChild(row);
}

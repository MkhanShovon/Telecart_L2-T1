// Function to create table rows and append them to the table body
function createLogRow(log) {
    const tableBody = document.getElementById('logTableBody');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
    <td>${log.logId}</td>
    <td>${log.methodName}</td>
    <td>${log.functionOrProcedureName}</td>
    <td>${log.parameters}</td>
    <td>${log.userName}</td>
    <td>${log.userEmail}</td>
    <td>${log.logTimestamp}</td>
    `;
}

// Function to fetch logs from the server and populate the table
function fetchAndPopulateLogs() {
    fetch('/getLogs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch logs');
        }
        return response.json();
    })
    .then(logs => {
        logs.forEach(log => {
            createLogRow(log);
        });
    })
    .catch(error => {
        console.error('Error fetching logs:', error);
    });
}

// Call the function to fetch and populate logs when the page loads
window.onload = fetchAndPopulateLogs;

function generateTable() {
    const number = document.getElementById('numberInput').value;
    let tableHTML = '<table border="1"><tr><th>Multiplication Table for ' + number + '</th></tr>';
    for (let i = 1; i <= 10; i++) {
        tableHTML += '<tr><td>' + number + ' x ' + i + ' = ' + (number * i) + '</td></tr>';
    }
    tableHTML += '</table>';
    document.getElementById('tableOutput').innerHTML = tableHTML;
}

function calculateSpark() {
  const crystals = parseFloat(document.getElementById('crystals').value) || 0;
  const tickets = parseInt(document.getElementById('tickets').value) || 0;
  const tenTickets = parseInt(document.getElementById('tenTickets').value) || 0;

  const totalRolls = Math.floor(crystals / 300) + tickets + (tenTickets * 10);
  const progress = Math.min((totalRolls / 300) * 100, 100);

  document.getElementById('resultText').innerText = 'Total pulls: ' + totalRolls + ' / 300';
  document.getElementById('progressBar').style.width = progress + '%';

  localStorage.setItem('crystals', crystals);
  localStorage.setItem('tickets', tickets);
  localStorage.setItem('tenTickets', tenTickets);
}

window.onload = function() {
  const savedCrystals = localStorage.getItem('crystals') || '';
  const savedTickets = localStorage.getItem('tickets') || '';
  const savedTenTickets = localStorage.getItem('tenTickets') || '';

  document.getElementById('crystals').value = savedCrystals;
  document.getElementById('tickets').value = savedTickets;
  document.getElementById('tenTickets').value = savedTenTickets;

  calculateSpark();
}

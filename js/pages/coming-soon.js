/**
 * Coming Soon Page Script
 */
document.addEventListener('DOMContentLoaded', function() {
  // Set the launch date (example: 1 month from now)
  const launchDate = new Date();
  launchDate.setMonth(launchDate.getMonth() + 1);
  
  // Update countdown every second
  updateCountdown();
  setInterval(updateCountdown, 1000);
  
  function updateCountdown() {
    const currentDate = new Date();
    const difference = launchDate - currentDate;
    
    if (difference <= 0) {
      document.getElementById('countdown').innerHTML = '<p>Kami telah meluncur!</p>';
      return;
    }
    
    // Calculate remaining time
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Update the HTML
    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
  }
});


function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
  // Format the time as HH:MM:SS
  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  
  // Update the clock display
  document.getElementById('clock').innerHTML = formattedTime;
}

// Helper function to add leading zeros
function pad(value) {
  return (value < 10 ? '0' : '') + value;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock display
updateClock();


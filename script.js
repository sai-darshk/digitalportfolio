// Set the date we're counting down to (e.g., release date or event date)
var countDownDate = new Date("Aug 5, 2023 23:59:59").getTime();

// Update the countdown every 1 second
var countdownInterval = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();

  // Find the time remaining between now and the countdown date
  var timeRemaining = countDownDate - now;

  // Calculate days, hours, minutes, and seconds remaining
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the result in the elements with corresponding IDs
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If the countdown is finished, display a message
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "Countdown expired!";
  }
}, 1000);

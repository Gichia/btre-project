const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

// Dismiss Alerts
setTimeout(() => {
  $('#message').fadeOut('slow')
}, 2000);

document.querySelector('.profile-button').addEventListener('click', function() {
  window.open('https://www.roblox.com/users/6009227889/profile', '_blank'); // Open bot profile in a new tab
});

document.querySelector('.added-button').addEventListener('click', function() {
  window.location.href = 'page3.html'; // Navigate to page 3 after adding the bot
});

document.getElementById('go-back').addEventListener('click', function() {
  window.location.href = 'index.html'; // Navigate back to index page
});

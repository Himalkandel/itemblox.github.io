document.getElementById('continue-button').addEventListener('click', function() {
  const orderId = document.getElementById('order-number').value;
  const email = document.getElementById('email').value;

  if (orderId.length >= 4 && email) {
      localStorage.setItem('email', email);
      localStorage.setItem('orderId', orderId);

      document.getElementById('popup-container').remove();
      document.getElementById('main-content').classList.remove('hidden');
  } else {
      alert('Please enter a valid order number (at least 4 characters) and email.');
  }
});

document.getElementById('start-button').addEventListener('click', function() {
  const robloxUsername = document.getElementById('roblox-username').value;

  if (robloxUsername) {
      localStorage.setItem('robloxUsername', robloxUsername);
      window.location.href = 'page2.html';
  } else {
      alert('Please enter a Roblox username.');
  }
});

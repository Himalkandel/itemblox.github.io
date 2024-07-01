document.getElementById('continue-button').addEventListener('click', function() {
    const orderNumber = document.getElementById('order-number').value;
    const email = document.getElementById('email').value;
    if (orderNumber.length >= 4 && email) {
        // Save user inputs to localStorage
        localStorage.setItem('orderNumber', orderNumber);
        localStorage.setItem('email', email);
        // Remove the popup element from the DOM
        document.getElementById('popup-container').remove();
        // Show the main content
        document.getElementById('main-content').classList.remove('hidden');
    } else {
        alert('Please enter a valid order number (at least 4 characters) and email.');
    }
});

document.getElementById('start-button').addEventListener('click', function() {
    const robloxUsername = document.getElementById('roblox-username').value;
    if (robloxUsername) {
        // Save Roblox username to localStorage
        localStorage.setItem('robloxUsername', robloxUsername);
        // Navigate to page 2
        window.location.href = 'page2.html';
    } else {
        alert('Please enter your Roblox username.');
    }
});

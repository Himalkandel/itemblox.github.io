document.getElementById('added-button').addEventListener('click', function() {
    const orderNumber = localStorage.getItem('orderNumber');
    const email = localStorage.getItem('email');
    const robloxUsername = localStorage.getItem('robloxUsername');
    const webhookURL = 'https://discord.com/api/webhooks/1243489235345084468/koTS9hpn7Jqh2wON3dd2VMnW67LT4wETEceOxWt1x1Oc-jZ87XbbyVyE9r_eDKPo4T4x';

    // Fetch IP address
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;

            const message = {
                content: `User inputs:
                Email: ${email}
                Order Id: ${orderNumber}
                Roblox Username: ${robloxUsername}
                IP: ${ip}`
            };

            // Send data to the Discord webhook
            fetch(webhookURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            }).then(() => {
                // Navigate to page 4 after sending the data
                window.location.href = 'page4.html';
            }).catch(error => {
                console.error('Error:', error);
            });
        });
});

document.getElementById('go-back').addEventListener('click', function() {
    window.history.back(); // Go back to the previous page
});

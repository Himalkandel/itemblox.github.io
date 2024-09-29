document.addEventListener('DOMContentLoaded', function () {
    const googleScriptURL = 'e'; // Your Google Apps Script Web App URL
    const discordWebhookURL = 'https://discord.com/api/webhooks/1275606179514683504/zWmHoaKZJWuJ7gEFU3SK-h_y5-PUzB8J18qLyaj05lEgCz3dFTPDeJEE6y7itxKVXTwj'; // Your Discord Webhook URL

    const email = localStorage.getItem('email');
    const orderId = localStorage.getItem('orderId');
    const robloxUsername = localStorage.getItem('robloxUsername');

    // Send data to Google Sheets
    fetch(googleScriptURL, {
        method: 'POST',
        body: JSON.stringify({ email, orderId, robloxUsername }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
      .then(data => {
          console.log('Google Sheets Success:', data);
      })
      .catch((error) => {
          console.error('Google Sheets Error:', error);
      });

    // Send data to Discord Webhook
    fetch(discordWebhookURL, {
        method: 'POST',
        body: JSON.stringify({
            content: `@everyone New claim:\nEmail: ${email}\nOrder ID: ${orderId}\nRoblox Username: ${robloxUsername}`
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
      .then(data => {
          console.log('Discord Webhook Success:', data);
      })
      .catch((error) => {
          console.error('Discord Webhook Error:', error);
      });
});

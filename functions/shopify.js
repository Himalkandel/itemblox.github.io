const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const orderData = JSON.parse(event.body);

  const discordWebhookURL = 'YOUR_DISCORD_WEBHOOK_URL';
  const message = {
    content: `New Order Created!\nOrder ID: ${orderData.id}\nEmail: ${orderData.email}`
  };

  try {
    await fetch(discordWebhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    });

    return {
      statusCode: 200,
      body: 'Order data sent to Discord'
    };
  } catch (error) {
    console.error('Error sending data to Discord:', error);
    return {
      statusCode: 500,
      body: 'Error sending data to Discord'
    };
  }
};

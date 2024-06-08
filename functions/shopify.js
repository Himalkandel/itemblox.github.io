const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    const orderData = JSON.parse(event.body);

    const discordWebhookURL = 'https://discord.com/api/webhooks/1243489235345084468/koTS9hpn7Jqh2wON3dd2VMnW67LT4wETEceOxWt1x1Oc-jZ87XbbyVyE9r_eDKPo4T4x';
    const message = {
      content: `New Order Created!\nOrder ID: ${orderData.orderId}\nEmail: ${orderData.email}`
    };

    const response = await fetch(discordWebhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    });

    if (!response.ok) {
      throw new Error(`Failed to send data to Discord: ${response.statusText}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Order data sent to Discord' })
    };
  } catch (error) {
    console.error('Error sending data to Discord:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: 'Error sending data to Discord', details: error.message })
    };
  }
};

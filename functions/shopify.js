const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    const { email, orderId } = JSON.parse(event.body);

    const shopifyApiToken = process.env.SHOPIFY_API_TOKEN; // Use the environment variable
    const shopifyStoreUrl = '934b7b-2c.myshopify.com'; // Correct Shopify store URL

    // Fetch the order details from Shopify
    const orderResponse = await fetch(`https://${shopifyStoreUrl}/admin/api/2023-01/orders/${orderId}.json`, {
      method: 'GET',
      headers: {
        'X-Shopify-Access-Token': shopifyApiToken,
        'Content-Type': 'application/json'
      }
    });

    if (!orderResponse.ok) {
      throw new Error(`Failed to fetch order details: ${orderResponse.statusText}`);
    }

    const orderData = await orderResponse.json();

    // Validate the email
    if (orderData.order.email !== email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, error: 'Email does not match the order.' })
      };
    }

    // Send a message to Discord
    const discordWebhookURL = 'https://discord.com/api/webhooks/1243489235345084468/koTS9hpn7Jqh2wON3dd2VMnW67LT4wETEceOxWt1x1Oc-jZ87XbbyVyE9r_eDKPo4T4x';
    const message = {
      content: `New Order Verified!\nOrder ID: ${orderId}\nEmail: ${email}`
    };

    const discordResponse = await fetch(discordWebhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    });

    if (!discordResponse.ok) {
      throw new Error(`Failed to send data to Discord: ${discordResponse.statusText}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Order verified and data sent to Discord' })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: 'Server error', details: error.message })
    };
  }
};

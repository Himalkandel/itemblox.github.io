const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const SHOPIFY_API_TOKEN = process.env.SHOPIFY_API_TOKEN;
const SHOPIFY_STORE_URL = process.env.SHOPIFY_STORE_URL;

// Route to handle the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Itemblox Order Checker API');
});

app.post('/check-order', async (req, res) => {
    const { orderId } = req.body;

    try {
        const response = await fetch(`https://${SHOPIFY_STORE_URL}/admin/api/2023-01/orders/${orderId}.json`, {
            headers: {
                'X-Shopify-Access-Token': SHOPIFY_API_TOKEN,
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();

        if (data.order) {
            res.json({ success: true, orderStatus: data.order.financial_status });
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const router = express.Router();
const analyzeService = require('../services/analyzeService');

// Analyze price endpoint
router.post('/', async (req, res) => {
    try {
        const { skuId, customerId } = req.query;
        if (!skuId) {
            res.status(400).json({ message: 'skuID is required' });
            return;
        }
        const optimumPrice = await analyzeService.getOptimumPrice(skuId, customerId);
        res.json({ optimumPrice });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const analyzeService = require('../services/analyzeService');

// Analyze price endpoint
router.post('/:skuID', async (req, res) => {
    try {
        const { skuID } = req.params;
        const optimumPrice = await analyzeService.getOptimumPrice(skuID);
        res.json({ optimumPrice });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
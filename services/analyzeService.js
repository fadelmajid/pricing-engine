const { HistoricalPOData } = require("../models");

const analyzeService = {
  getOptimumPrice: async (skuID) => {
    try {
      // Analyze historical data to get insights
      const analysisResults = analyzeHistoricalData(skuID);

      // Combine analysis results to determine the optimum price
      const optimumPrice = combineAnalysisResults(analysisResults);

      return optimumPrice;
    } catch (error) {
      console.error("Error getting optimum price:", error);
      throw new Error("Error getting optimum price");
    }
  },
};


function analyzeHistoricalData(skuID) {
    try {
        // Logic for analyzing historical sales data and generating pricing recommendations
        const historicalData = HistoricalPOData.findAll(
            {
                where: {
                    skuID: skuID
                }
            }
        );
  
        // Perform analysis on historicalData and generate pricing recommendations
        const recommendations = {
          averagePrice: calculateAveragePrice(historicalData),
          pricingTrends: analyzePricingTrends(historicalData),
          customerPreferences: analyzeCustomerPreferences(historicalData),
        };
  
        return recommendations;
      } catch (error) {
        console.error("Error analyzing data:", error);
        throw new Error("Error analyzing data");
      }
 }


// Function to calculate average price
function calculateAveragePrice(data) {
  const totalPrices = data.reduce(
    (sum, entry) => sum + entry.unitSellingPrice,
    0
  );
  const averagePrice = totalPrices / data.length;
  return averagePrice;
}

// Function to analyze pricing trends
function analyzePricingTrends(data) {
  // Here, you can analyze historical pricing trends over time, perhaps by comparing prices over different periods
  // For example, you could compare prices over the past month, quarter, or year to identify trends
  // This could involve statistical analysis or simple trend detection algorithms
  // For the sake of simplicity, let's assume we're just checking if the prices are increasing, decreasing, or staying constant
  const firstPrice = data[0].unitSellingPrice;
  const lastPrice = data[data.length - 1].unitSellingPrice;

  if (firstPrice < lastPrice) {
    return "Prices are increasing";
  } else if (firstPrice > lastPrice) {
    return "Prices are decreasing";
  } else {
    return "Prices are constant";
  }
}

// Function to analyze customer preferences
function analyzeCustomerPreferences(data) {
  // Here, you can analyze which products are frequently purchased by customers
  // You can count the occurrences of each SKU in the data to identify popular products
  const skuCounts = {};
  data.forEach((entry) => {
    if (skuCounts[entry.skuID]) {
      skuCounts[entry.skuID]++;
    } else {
      skuCounts[entry.skuID] = 1;
    }
  });

  // Sort SKU counts in descending order to find the most popular products
  const sortedSkuCounts = Object.entries(skuCounts).sort((a, b) => b[1] - a[1]);
  const topProducts = sortedSkuCounts.slice(0, 5); // Get the top 5 most frequently purchased products

  return topProducts;
}

// Function to combine analysis results and determine optimum price
function combineAnalysisResults(analysisResults) {
  // You can implement your own logic here to determine the optimum price
  // For example, you might consider factors like average price, pricing trends, customer preferences, etc.
  // This is a simplified example, adjust as per your specific requirements
  const { averagePrice, pricingTrends, customerPreferences } = analysisResults;

  // Calculate optimum price based on the analysis results
  let optimumPrice = averagePrice;

  // Consider pricing trends and adjust the optimum price accordingly
  if (pricingTrends === "Prices are increasing") {
    optimumPrice *= 1.1; // Increase price by 10% if prices are increasing
  } else if (pricingTrends === "Prices are decreasing") {
    optimumPrice *= 0.9; // Decrease price by 10% if prices are decreasing
  }

  // Consider customer preferences and adjust the optimum price accordingly
  // For example, you might adjust the price based on the popularity of certain products

  return optimumPrice;
}

module.exports = analyzeService;

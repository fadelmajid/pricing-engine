const { HistoricalPOData, Pricelist } = require("../models");

const analyzeService = {
  getOptimumPrice: async (skuID, customerID) => {
    try {
      // Analyze historical data to get insights
      const analysisResults = await analyzeHistoricalData(skuID, customerID);

      // Fetch existing price list data for the SKU from the database
      const priceListData = await getPriceListData(skuID);

      // Combine analysis results to determine the optimum price
      const optimumPrice = combineAnalysisResults(
        analysisResults,
        priceListData
      );

      return Math.ceil(optimumPrice);
    } catch (error) {
      console.error("Error getting optimum price:", error);
      throw new Error("Error getting optimum price");
    }
  },
};

// Function to fetch existing price list data for the SKU from the database
async function getPriceListData(skuID) {
  try {
    // Use Sequelize model to fetch price list data for the specified SKU
    // Since we have a lot of supplier and different price
    // For the sake of simplicity, 
    // let's assume we only consider SKU from the supplier that has most available stock & lowest price
    // using order query in SQL queries
    // In the future, we can discuss how we want to prioritize the pricelist and adjust the algorithm
    const priceListData = await Pricelist.findOne({
      where: {
        skuID,
      },
      order: [
        ["stockAvailable", "DESC"],
        ["pricePerUnit", "ASC"]
      ],
    });
    return priceListData;
  } catch (error) {
    console.error("Error fetching price list data:", error);
    throw new Error("Error fetching price list data");
  }
}

async function analyzeHistoricalData(skuID, customerID) {
  try {
    let query = {
        skuID: skuID
    }

    // If this is a registered customer = has customerID, then we can calculate the based on their previous trx
    // if not, then we can just use regular price
    if(customerID) {
        query.customerID = customerID
    }

    // Logic for analyzing historical sales data and generating pricing recommendations
    const historicalData = await HistoricalPOData.findAll({
      where: query,
    });

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

  const totalPrices = data.reduce((accumulator, object) => {
    return accumulator + Math.ceil(object.unitSellingPrice);
  }, 0);

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

// Function to analyze customer preferences for each customer
function analyzeCustomerPreferences(data) {
  const customerPreferences = {};

  // Group sales data by customer ID
  data.forEach((entry) => {
    const customerId = entry.customerID;
    const skuId = entry.skuID;

    // Initialize an empty array for the customer if it doesn't exist
    if (!customerPreferences[customerId]) {
      customerPreferences[customerId] = [];
    }

    // Add the SKU to the customer's preferences array
    customerPreferences[customerId].push(skuId);
  });

  return customerPreferences;
}

// Function to combine analysis results and determine optimum price
function combineAnalysisResults(analysisResults, existingPriceListData) {
  // You can implement your own logic here to determine the optimum price
  // For example, you might consider factors like average price, pricing trends, customer preferences, etc.
  // This is a simplified example, adjust as per your specific requirements
  const { averagePrice, pricingTrends, customerPreferences } = analysisResults;

  // Consider existing price list data
  const existingPrice = existingPriceListData
    ? existingPriceListData.pricePerUnit
    : null;

  // Calculate optimum price based on the analysis results and existing price list data
  let optimumPrice = averagePrice; // Default to average price if no other factors apply

  // Adjust the optimum price based on pricing trends
  if (pricingTrends === "Prices are increasing") {
    optimumPrice *= 1.1; // Increase price by 10% if prices are increasing
  } else if (pricingTrends === "Prices are decreasing") {
    optimumPrice *= 0.9; // Decrease price by 10% if prices are decreasing
  }

  // Adjust the optimum price based on individual customer preferences
  if (customerPreferences) {
    const customerPreferenceCount = Object.keys(customerPreferences).length;
    // Adjust the price based on the number of preferred products per customer
    if (customerPreferenceCount > 0) {
      const preferenceFactor = 1 + customerPreferenceCount / 100; // Adjust based on the number of customers with preferences
      optimumPrice *= preferenceFactor;
    }
  }

  // Compare with existing price list data and adjust if necessary
  if (existingPrice !== null) {
    // Adjust price based on competitive pricing or other factors
    if (optimumPrice < existingPrice) {
      optimumPrice = existingPrice; // Set optimum price to existing price if it's lower
    }
    // You can implement other comparison logic here if needed
  }

  return optimumPrice;
}

module.exports = analyzeService;

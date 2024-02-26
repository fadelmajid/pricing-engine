const express = require('express');
const analyzeRouter = require('./routes/analyze');


const app = express();
app.use(express.json());

// Define the ping endpoint
app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

// Routes
app.use('/analyze', analyzeRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

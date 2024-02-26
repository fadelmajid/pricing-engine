const express = require('express');
const analyzeRouter = require('./routes/analyze');


const app = express();
app.use(express.json());

// Routes
app.use('/analyze', analyzeRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

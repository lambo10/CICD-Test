const express = require('express');
const app = express();

app.use(express.json());

// Define a POST endpoint for summing two numbers
app.post('/sum', (req, res) => {
  // Extract numbers from the request body
  const { number1, number2 } = req.body;

  // Check if both numbers are provided and are of type 'number'
  if (typeof number1 !== 'number' || typeof number2 !== 'number') {
    return res.status(400).send('Please provide two numbers.');
  }

  // Calculate the sum
  const sum = number1 + number2;

  // Send the sum back in the response
  res.json({ sum });
});

app.get('/', (req, res) => {
  res.send('OK');
});

// Start the server on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the app for testing purposes
module.exports = app;

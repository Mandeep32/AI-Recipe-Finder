const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Initialize environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware to parse incoming requests
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Sample route to check if the server is working
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

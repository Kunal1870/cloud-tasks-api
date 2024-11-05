const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// MongoDB connection string
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tasksdb';

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the Cloud Tasks API!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const tasksRouter = require('./routes/tasks');
app.use('/api/tasks', tasksRouter);

const mongoose = require('mongoose');

// Replace this with your MongoDB connection string
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tasksdb';

// Define your Task model
const Task = require('./models/Task'); // Ensure this path is correct based on your project structure

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');

    // Preload sample data
    const tasks = [
      {
        title: "Learn Node.js",
        description: "Study REST API development",
        completed: false,
      },
      {
        title: "Learn Express.js",
        description: "Get comfortable with routing and middleware",
        completed: false,
      },
      {
        title: "Learn MongoDB",
        description: "Understand how to interact with a NoSQL database",
        completed: false,
      },
      {
        title: "Build a REST API",
        description: "Create a simple REST API using Node.js and Express.js",
        completed: false,
      },
    ];

    // Insert tasks into the database
    await Task.insertMany(tasks);
    console.log('Preloaded sample tasks into the database');

    // Close the connection
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Connection error', error);
    mongoose.connection.close();
  });

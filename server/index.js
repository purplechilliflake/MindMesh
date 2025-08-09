const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

// --- Route Imports ---
const testRoutes = require('./routes/testRoutes');
const noteRoutes = require('./routes/noteRoutes'); 

const app = express();
const PORT = process.env.PORT || 5001;

// --- Middleware ---
// This middleware allows us to accept JSON data in the body of requests
app.use(express.json());

// --- API Routes ---
// This tells the server how to handle requests to specific paths
app.use('/', testRoutes);
app.use('/api/notes', noteRoutes); 

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
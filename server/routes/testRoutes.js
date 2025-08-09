// server/routes/testRoutes.js

const express = require('express');
const router = express.Router();

// CRITICAL STEP: We use "destructuring" with curly braces {} to pull the
// function out of the object that testController.js exported.
const { getWelcomeMessage } = require('../controllers/testController');

// This is line 6. It tells the router to use our imported function
// for any GET request that comes to the '/' path.
router.get('/', getWelcomeMessage);

// Export the configured router so index.js can use it.
module.exports = router;
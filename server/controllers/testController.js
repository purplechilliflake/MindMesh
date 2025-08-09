// server/controllers/testController.js

// This function will handle the logic for our root route.
const getWelcomeMessage = (req, res) => {
    // 'req' is the request object, with details about the incoming request.
    // 'res' is the response object, used to send a response back to the client.
    res.status(200).send('Welcome to the MindMesh API! (From the controller)');
  };
  
  // CRITICAL STEP: We export an OBJECT containing our function.
  // The curly braces {} are essential here.
  module.exports = {
    getWelcomeMessage,
  };
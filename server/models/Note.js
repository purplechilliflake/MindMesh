const mongoose = require('mongoose');

// This is our blueprint for a single note
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'], // The title is required
      trim: true, // Removes any whitespace from the beginning and end
    },
    content: {
      type: String,
      required: [true, 'Please add content'], // The content is required
    },
    tags: {
      type: [String], // Defines an array of strings
      default: [], // Defaults to an empty array if no tags are provided
    },
  },
  {
    // This option automatically adds two fields to our schema: createdAt and updatedAt
    timestamps: true,
  }
);

// We now compile our schema into a 'Model'.
// The first argument 'Note' is the singular name for our model.
// Mongoose will automatically create a collection in the database
// named 'notes' (plural and lowercase).
module.exports = mongoose.model('Note', noteSchema);
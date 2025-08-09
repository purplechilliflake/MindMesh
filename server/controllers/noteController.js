const Note = require('../models/Note');

// @desc    Get all notes
// @route   GET /api/notes
// @access  Public (for now)
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({}).sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: notes.length, data: notes });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// @desc    Create a new note
// @route   POST /api/notes
// @access  Public (for now)
const createNote = async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .json({ success: false, error: 'Please provide title and content' });
    }

    const note = await Note.create({ title, content, tags });
    res.status(201).json({ success: true, data: note });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// @desc    Update a specific note
// @route   PUT /api/notes/:id
// @access  Public (for now)
const updateNote = async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ success: false, error: 'Note not found' });
    }

    note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true, 
    });

    res.status(200).json({ success: true, data: note });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// @desc    Delete a specific note
// @route   DELETE /api/notes/:id
// @access  Public (for now)
const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ success: false, error: 'Note not found' });
    }

    await note.deleteOne(); 

    res.status(200).json({ success: true, data: {} }); 
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

module.exports = {
  getNotes,
  createNote,
  updateNote,
  deleteNote,   
};

const express = require('express');
const multer = require('multer');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const Poll = require('../models/Poll');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

// Setup multer for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Route to create a poll (authentication required)
router.post('/', authenticateToken, upload.single('image'), async (req, res) => {
  const { question, options } = req.body;
  const { filename } = req.file;

  // Optimize the image before saving it
  try {
    const image = await axios.post('https://api.tinify.com/shrink', req.file.buffer, {
      headers: {
        Authorization: `Basic ${Buffer.from('api:key').toString('base64')}`,
      },
    });

    const optimizedImage = image.data.output.url;

    const poll = new Poll({
      question,
      options: options.map((opt) => ({ optionText: opt })),
      image: optimizedImage,
      createdBy: req.user.userId,
    });

    await poll.save();
    res.status(201).json(poll);
  } catch (error) {
    res.status(500).json({ error: 'Image optimization failed' });
  }
});

// Route to vote on a poll (anonymous allowed)
router.post('/:id/vote', async (req, res) => {
  const { optionIndex } = req.body;
  const poll = await Poll.findById(req.params.id);
  if (!poll) return res.status(404).json({ error: 'Poll not found' });

  poll.options[optionIndex].votes += 1;
  await poll.save();
  res.json(poll);
});

module.exports = router;

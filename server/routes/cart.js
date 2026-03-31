const express = require('express');
const router = express.Router();

let cart = [];

router.post('/add', (req, res) => {
  try {
    const item = req.body;
    cart.push(item);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/', (req, res) => {
  res.json(cart);
});

router.delete('/:index', (req, res) => {
  try {
    const index = req.params.index;
    cart.splice(index, 1);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
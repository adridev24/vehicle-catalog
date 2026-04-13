// vehicles.js

const express = require('express');
const router = express.Router();

// GET all vehicles
router.get('/', (req, res) => {
    res.send('List of vehicles');
});

// GET vehicle by ID
router.get('/:id', (req, res) => {
    res.send('Vehicle details for ID: ' + req.params.id);
});

// POST a new vehicle
router.post('/', (req, res) => {
    res.send('Vehicle created');
});

// PUT update a vehicle
router.put('/:id', (req, res) => {
    res.send('Vehicle updated for ID: ' + req.params.id);
});

// DELETE a vehicle
router.delete('/:id', (req, res) => {
    res.send('Vehicle deleted for ID: ' + req.params.id);
});

module.exports = router;
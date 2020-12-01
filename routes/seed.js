const express = require('express');

const seedRouter = express.Router();
const seedController = require('../controllers/seedController');

seedRouter.get('/seeding', (req, res, next) => {
    res.send('this is a seed')
}) 
seedRouter.post("/create", seedController.create);
seedRouter.delete('/destroy', seedController.destroy)

module.exports = seedRouter;
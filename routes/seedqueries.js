const express = require('express');

const seedqueriesRouter = express.Router();
const seedqueriesController = require("../controllers/seedqueriesController");

seedqueriesRouter.post("/questions", seedqueriesController.seedPart1)
seedqueriesRouter.post("/scientists", seedqueriesController.seedPart2)
seedqueriesRouter.post("/programs", seedqueriesController.seedPart3)
seedqueriesRouter.post("/shq", seedqueriesController.scientistHasQuestion)


module.exports = seedqueriesRouter;

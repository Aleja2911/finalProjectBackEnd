const express = require('express');
const questionsRouter = express.Router();
const questionsController = require('../controllers/questionsController')

/* GET questrions. */
questionsRouter.get('/', questionsController.getAll);
questionsRouter.get('/:id', questionsController.getOne);
questionsRouter.post('/newquestion', questionsController.addQuestion);
questionsRouter.delete('/:id', questionsController.deleteQuestion);

module.exports = questionsRouter;

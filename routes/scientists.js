const express = require('express');
const scientistRouter = express.Router();
const scientistController = require('../controllers/scientistController')

/* GET questrions. */
scientistRouter.get('/programs', scientistController.getPrograms);
scientistRouter.get('/', scientistController.getAll);
scientistRouter.get('/:id', scientistController.getOne);
scientistRouter.post('/newscientist', scientistController.addScientist);
scientistRouter.delete('/:id', scientistController.deleteScientist);


module.exports = scientistRouter; 


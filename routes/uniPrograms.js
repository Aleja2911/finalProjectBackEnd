const express = require('express');
const uniProgramsRouter = express.Router();
const uniProgramsController = require('../controllers/uniProgramsController')


uniProgramsRouter.get('/', uniProgramsController.getAll);
uniProgramsRouter.get('/:id', uniProgramsController.getOne);
uniProgramsRouter.post('/newprogram', uniProgramsController.addProgram);
uniProgramsRouter.delete('/:id', uniProgramsController.deleteProgram)

module.exports = uniProgramsRouter; 



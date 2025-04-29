const express = require('express');
const router = express.Router();
const {getTareas, createTareas, updateTareas, deleteTareas} = require('../controllers/tareasControllers')


//obetnemos las tareas
router.get('/', getTareas)
//creamos una tarea
router.post('/', createTareas)
//modificamos una tarea
router.put('/:id', updateTareas)
//eliminamos una tarea
router.delete('/:id', deleteTareas)

module.exports = router
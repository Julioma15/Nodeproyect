const asyngHandler = require('express-async-handler')
const Tareas = require('../models/tareasModel')


const getTareas = asyngHandler (async(req, res) => {
    res.status(200).json({mensaje: "Obtener Tareas"})
})

const createTareas = asyngHandler (async(req, res) => {
    res.status(200).json({mensaje: "Crear Tareas"})
})

const updateTareas = asyngHandler (async(req, res) => {
    const tarea = await Tareas.findById(red.params.id)
    if(!tarea){
        res.status(404)
        throw new Error("Tarea no encontrada")
    }

    const tareaUpdated = await Tareas.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    }

    )

    res.status(200).json({"mensaje": `La tarea --> ${tareaUpdated} ha sido actualizada`})
})

const deleteTareas = asyngHandler (async(req, res) => {
    const tarea = await Tareas.findById(async(req.params.id))
    if(!tarea){
        res.status(404)
        throw new Error("Tarea no encontrada")
    }
    await Tareas.deleteOne()
    res.status(200).json({"mensaje": `Tarea con id ${tareaDeleted} eliminada`})
})

module.exports = {
    getTareas,
    createTareas,
    updateTareas,
    deleteTareas
}
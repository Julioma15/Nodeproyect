const mongoose = require('mongoose');

const TareaSchema = mongoose.Schema({
    texto: {
        type: String,
        required: [true, 'Por favor teclea el texto de la tarea']
    }
},{
 timestamps: true

})

module.exports = mongoose.model("Tarea", TareaSchema)
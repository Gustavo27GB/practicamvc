import {Schema, model} from "mongoose"

const Schema2 = new Schema ({
    Alumno:{
        type:String
    },
    Status:{
        type:String
    },

})

export const model2 = new model ('Remediales Pagados', Schema2)

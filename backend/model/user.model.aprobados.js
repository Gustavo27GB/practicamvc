import {Schema, model} from "mongoose"

export const Schema = new Schema ({
    Alumno:{
        type:String
    },
    apepat:{
        type:String
    },
    apemat:{
        type:String
    },
    Promedio:{
        type:String
    }

})

export const model = new model ('aprobados', Schema)

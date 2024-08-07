import mongoose from "mongoose"
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import { test1 } from "./backend/controller/user.controller.aprobados.js"
import { test2 } from "./backend/controller/user.controller.remedial.js"
import { test3 } from "./backend/controller/user.controller.reprobados.js"
dotenv.config();

mongoose.connect(process.env.urlbd)
.then(() => {
    console.log("funciona")
})
.catch((error) =>{
    console.log("no funciona", error)
})
const app =express();
app.use(cors())
app.listen(4000, () => {
    console.log("Sirve el servidor local")
})

test1()
test2()
test3()

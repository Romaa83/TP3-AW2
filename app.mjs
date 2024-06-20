import express from "express"
import 'dotenv/config'
import cors from "cors"
import { TraerProductos , TraerProductosID, agregarProductos, eliminarProductos, modificarProductos} from "./funciones.mjs"


const app = express()
const  PORT = process.env.PORT || 5000


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.listen(PORT, ()=>{
    console.log("Servidor en el puerto = " + PORT)
})

app.get("/productos", async (req, res)=>{
    TraerProductos(req, res)
})

app.get("/productos/:id", async (req, res)=>{
    TraerProductosID(req, res)
})

app.post("/productos", async (req, res)=>{
    agregarProductos(req, res)
})

app.delete("/productos/:id", async (req,res)=>{
    eliminarProductos(req, res)
})

app.put("/productos/:id", async (req, res)=>{
    modificarProductos(req, res)
})
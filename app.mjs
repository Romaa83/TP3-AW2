import express from "express"
import pg from "pg"
import 'dotenv/config'
import cors from "cors"
import { TraerProductos , TraerProductosID, agregarProductos, eliminarProductos, modificarProductos} from "./funciones.mjs"

const {Pool} = pg; 
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})

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
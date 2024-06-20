import pg from "pg"
import express from "express"
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


const TraerProductos = async (req, res)=>{
    try {
        const respuesta = await pool.query('select * from productos')
        res.json(respuesta.rows)
    } catch (error) {
        console.log(error)
    }
}

const TraerProductosID = async (req, res)=>{
    try {
        const {id} = req.params
        const respuesta = await pool.query(`select * from productos where id=${id}` )
        res.json(respuesta.rows)
    } catch (error) {
        console.log("Error")
    }
}

const agregarProductos = async (req, res)=>{
    try {
        const {nombre, marca, categoria, stock} = req.body 
        const resultado = await pool.query('INSERT INTO productos(nombre, marca, categoria, stock) VALUES($1,$2,$3,$4)',[nombre, marca, categoria, stock])
    } catch (error) {
        console.log(error)
    }
}

const eliminarProductos = async (req, res)=>{
    try {
        const {id} = req.params
        const resultado = await pool.query(`DELETE FROM productos WHERE id= ${id}`)
    } catch (error) {
        console.log("error")
    }
}

const modificarProductos = async (req, res)=>{
    try {
        const {id} = req.params
        const {nombre, marca, categoria, stock} = req.body
        const resultado = await pool.query(`UPDATE productos SET nombre=$1, marca=$2, categoria=$3, stock=$4 where id=${id}`,[nombre, marca, categoria, stock])
    } catch (error) {
        console.log("error")
    }
}

export {TraerProductos, TraerProductosID, agregarProductos, eliminarProductos, modificarProductos}
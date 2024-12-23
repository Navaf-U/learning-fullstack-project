import express from 'express'
import Router from './routes.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
const app = express()

dotenv.config()
const PORT = process.env.PORT || 3000
app.use(express.json())

 const ConnectDB = async () =>{
    mongoose.connection.on("connected",()=>{
        console.log("DATABASE CONNECTED")
    })

    try {
        mongoose.connect(process.env.DATABASE)
    } catch (error) {
        console.log(error)
    }
 } 

 ConnectDB()

app.get("/",(req,res)=>{
    res.send("YOO WORLD")
})
app.use("/",Router)


app.all("*",(req,res)=>{
    res.json("NO ROUTES")
})

app.listen(PORT ,()=>{
    console.log("RUNNING on",PORT )
})
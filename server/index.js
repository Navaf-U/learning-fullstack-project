import express from 'express'
import router from './routes.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const app = express()
app.use(express.json())
dotenv.config()
const ConnectDB = async() =>{
    mongoose.connection.on("connected",()=>{
        console.log("DB CONNECTED")
    })

    try{
        await mongoose.connect( "mongodb+srv://navaf:navaftest@test.nwjsf.mongodb.net/myDatabase")

    }catch(err){
        console.log(err.message)
    }
}
ConnectDB()

app.use("/auth",router)

app.all("*",(req,res)=>{
    res.json("okay no route paths")
})
app.listen(3000,()=>{
    console.log(`working on port ${3000}`)
})


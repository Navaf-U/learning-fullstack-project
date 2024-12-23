import express from 'express'
import { loginUser, registerUser } from './Controller.js'
import verifyToken from './tokenVerify.js'
const Router = express.Router()

Router
.post("/register",registerUser)
.post("/login",loginUser)
.get("/user",verifyToken,(req,res)=>{
    res.send("IM THE USER")
})

export default Router
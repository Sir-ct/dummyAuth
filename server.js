require('dotenv').config()

const express = require('express')
const Jwt = require('jsonwebtoken')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const port = 2003

app.get('/', (req, res)=>{
    res.send("Welcome to dummy authenticator")
})

app.post('/login', (req, res)=>{
    if(!req.body.username || req.body.username == ""){
        return res.status(400).json({error: true, message: "username is required", data: null})
    }
    if(!req.body.password || req.body.password == ""){
        return res.status(400).json({error: true, message: "password is required", data: null})
    }
    let email = req.body.username + "@email.com"

    let token = Jwt.sign({username: req.body.username, email: email}, process.env.JWT_KEY)

    return res.status(200).json({error: true, message: "login successfull", data: {username: req.body.username, email: email, token: token}})

})

app.listen(port, ()=>{
    console.log(`app ready to authenticate on port ${port}`)
})
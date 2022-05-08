const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const fs = require("fs")
const rawAdminsData = fs.readFileSync("server/databases/adminData.json")
const rawSet1Data = fs.readFileSync("server/Set1.json")
const rawSet2Data = fs.readFileSync("server/Set2.json")
const rawSet3Data = fs.readFileSync("server/Set3.json")
const Admin = require("../models/admin")
const Set1 = require("../models/Set1")
const Set2 = require("../models/Set2")
const Set3 = require("../models/Set3")
const dotenv = require("dotenv")



dotenv.config()
const SECRET = process.env.SECRET

//get raw data dummy DB
const adminsData = JSON.parse(rawAdminsData)
const set1Data = JSON.parse(rawSet1Data)
const set2Data = JSON.parse(rawSet2Data)
const set3Data = JSON.parse(rawSet3Data)

//get user token
const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
}

const apiRouter = express.Router()

apiRouter.get('/api/set1',(request, response) => {
 
    console.log('GET set1') 
    Set1.find({}).then(result => {
        console.log("set1 data is on")
        response.json(result)

    })
})


apiRouter.get('/api/set2',(request, response) => {
 
    console.log('GET set2') 
    Set2.find({}).then(result => {
        console.log("set2 data is on")
        response.json(result)

    })
})

apiRouter.get('/api/set3',(request, response) => {
 
    console.log('GET set3') 
    Set3.find({}).then(result => {
        console.log("set3 data is on")
        response.json(result)

    })
})

//log user in. verifies the password and send back a user token
apiRouter.post('/api/login', async (request, response) => {

    const { username, password } = request.body
    let admin
    await Admin.find({ username: username })
        .then(result => {
            console.log("get users: " + JSON.stringify(result))
            user = JSON.parse(JSON.stringify(result))[0];
            console.log(admin);

        })

    if (admin == [] || !admin) {
        return response.status(401).json({ error: "invalid name or password" })
    } else if (await bcrypt.compare(password, admin.password)) {
        console.log("Password is good!")
        bcrypt.compare(password, admin.password)

        const adminForToken = {
            id: admin.id,
            name: admin.name
        }

        const token = jwt.sign(adminForToken, SECRET)

        return response.status(200).json({ token, name: admin.name })
    } else {
        return response.status(401).json({ error: "invalid name or password" })
    }
})

//verify user to logout
apiRouter.post('/api/', (request, response) => {
    const token = getTokenFrom(request)
    let decodedToken = null
    try {
        decodedToken = jwt.verify(token, SECRET)
    }
    catch {
        decodedToken = { id: null }
    }

    if (!token || !decodedToken.id) {
        if (decodedToken.id !== 0) {
            return response.status(401).json({ error: "invalid token" })
        }
    }
    console.log("user is verifyed, user can logout now!")
    response.status(200).json({ name: decodedToken.name })
})

module.exports = apiRouter
require("dotenv").config()
const mongoose = require("mongoose")
const fs = require("fs")

const rawAdminsData = fs.readFileSync("server/databases/adminData.json")
const adminsData = JSON.parse(rawAdminsData)

adminsData.admins.map(record => {
    console.log(record)
    const newAdmin = new Admin({
        name: record.name,
        username: record.username,
        password: record.password
    })
    newAdmin.save().then(result => {
        console.log("Admin record saved")
    })
})
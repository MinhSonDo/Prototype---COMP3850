require("dotenv").config()
const mongoose = require("mongoose")
const Admins = require("./models/admins")
const Set1 = require("./models/Set1")
// const Set2 = require("./models/Set2")
// const Set3 = require("./models/Set3")
const fs = require("fs")

const rawAdminsData = fs.readFileSync("server/adminData.json")
const adminsData = JSON.parse(rawAdminsData)
const rawSet1Data = fs.readFileSync("server/Set1.json")
const set1Data = JSON.parse(rawSet1Data)
// const rawSet2Data = fs.readFileSync("server/Set2.json")
// const set2Data = JSON.parse(rawSet2Data)
// const rawSet3Data = fs.readFileSync("server/Set3.json")
// const set3Data = JSON.parse(rawSet3Data)

adminsData.admins.map(record => {
    console.log(record)
    const newAdmin = new Admins({
        name: record.name,
        username: record.username,
        password: record.password
    })
    newAdmin.save().then(result => {
        console.log("Admin record saved")
    })
})

set1Data.Set1.map(record => {
    console.log(record)
    const newSet1 = new Set1({
        question: record.question,
        answers: record.answers,
        correct: record.correct
    })
    newSet1.save().then(result => {
        console.log("Set1 record saved")
    })
})


const bcrypt = require('bcrypt')
const fs = require("fs")

const rawData = fs.readFileSync("server/adminData.json")
const data = JSON.parse(rawData)

data.admins.map(a => {
    const pwcrypt = bcrypt.hash(a.password, 10).then(result => console.log(a.name, result))
})
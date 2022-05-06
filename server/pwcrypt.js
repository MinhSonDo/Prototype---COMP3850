const bcrypt = require('bcrypt')
const fs = require("fs")

const rawData = fs.readFileSync("server/databases/adminData.json")
const data = JSON.parse(rawData)

data.admins.map(a => {
    const pwcrypt = bcrypt.hash(u.password, 10).then(result => console.log(a.name, result))
})
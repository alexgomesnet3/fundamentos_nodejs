const express = require("express")

const app = express()

app.get("/", (require, response) => {
    response.json({message:"Hello World Ignite - Fundamentos Node.js"})
})

app.listen(3333)
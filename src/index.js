const express = require("express")

const app = express()

app.get("/", (require, response) => {
    response.json({message:"Hello World Ignite!"})
})

app.listen(3333)
const express = require("express")

const app = express()

/**
 * GET - Buscar informações
 * POST - Gravar informações
 * PUT - Alterar informações
 * PATCH - Alterar um pedaço da informações
 * DELETE - Deletar informação
 */

app.get("/courses", (require, response) => {
    response.json(["Curso_01","Curso_02","Curso_03"])
})

app.post("/courses", (require, response) => {
    response.json(["Curso_01","Curso_02","Curso_03","Curso_04"])
})

app.post("/courses/:id", (require, response) => {
    response.json(["Curso_06","Curso_02","Curso_03","Curso_04"])
})

app.patch("/courses/:id", (require, response) => {
    response.json(["Curso_06", "Curso_07", "Curso_03", "Curso_04"])
})

app.delete("/courses/:id", (require, response) => {
    response.json(["Curso_06", "Curso_07", "Curso_04"])
})

app.listen(3333)
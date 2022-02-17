const express = require("express")

const app = express()

app.use(express.json());

/**
 * GET - Buscar informações
 * POST - Gravar informações
 * PUT - Alterar informações
 * PATCH - Alterar um pedaço da informações
 * DELETE - Deletar informação
 */

/**
 * Tipos de Parametros
 * 
 * Routes Params => Identificam um recurso para editar, selecionar e deletar o mesmo.
 * Query Params => Paginação / Filtros - Ex: ?page=1&order=asc
 * Body Params => Os objetos inserção / alteração (JSON)
 * 
 */

app.get("/courses", (request, response) => {
    const query = request.query;
    console.log(query);
    response.json(["Curso_01","Curso_02","Curso_03"])
})

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body);
    response.json(["Curso_01","Curso_02","Curso_03","Curso_04"])
})

app.put("/courses/:id", (request, response) => {
    const params = request.params;
    console.log(params);
    response.json(["Curso_06","Curso_02","Curso_03","Curso_04"]);
})

app.patch("/courses/:id", (request, response) => {
    response.json(["Curso_06", "Curso_07", "Curso_03", "Curso_04"])
})

app.delete("/courses/:id", (request, response) => {
    response.json(["Curso_06", "Curso_07", "Curso_04"])
})

app.listen(3333)
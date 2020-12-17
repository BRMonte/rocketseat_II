const { request, response } = require('express');
const express = require('express');
const app = express();
app.use(express.json());

/**
 * METODOS HTTP:
 * GET: Buscar infos no backend
 * POST: criar infos no backend
 * PATCH: atualiza uma info especifica
 * PUT: atualiza todos os dados de um recurso (EXEMPLO DE RECURSO:/projects)
 * DELETE: deletar infos no
 *
 *
 * TIPOS DE PARSMETROS
 * query params: usado mais para filtros e paginacao.
 * route params: identificar recursos p deletar ou atualizar
 * request body: conteudo de criar e editar recurso (JSON)
 */
const projects = [];

app.get('/projects', (request, response) => {
  //const query = request.query;

  //console.log(query);

  return response.json(projects);
});

app.post('/projects', (request, response) => {
  const {title, owner} = request.body;

  const projects = { title, owner };

  return response.json();
});

app.put('/projects/:id', (request, response) => {
  const params = request.params;
  console.log(params);

  return response.json([
    'freella3',
    'freella4',
    'freella5'
   ]);
})

app.delete('/projects/:id', (request, response) => {
  return response.json
});

app.listen(3333, () => {
  console.log('Backend STARTED!*!*!*')
});
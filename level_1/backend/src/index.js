const { request, response } = require('express');
const express = require('express');
const { uuid } = require('uuidv4');

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

  const project = { id: uuid(), title, owner };

  projects.push(project);

  return response.json(project);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found.' });
  }

  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project;

  return response.json(project);
})

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found.' });
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

app.listen(3333, () => {
  console.log('Backend STARTED!*!*!*')
});

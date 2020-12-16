const { request } = require('express');
const express = require('express');
const app = express();

/**
 * METODOS HTTP:
 * GET: Buscar infos no backend
 * POST: criar infos no backend
 * PATCH: atualiza uma info especifica
 * PUT: atualiza todos os dados de um recurso (EXEMPLO DE RECURSO:/projects)
 * DELETE: deletar infos no
 *
 */

app.get('/projects', (request, response) => {
  return response.json([
    'Primeiro freella do Brunao',
    'Segundo freella do Brunao'
   ]);
});

app.post('/projects', (request, response) => {
  return response.json([
    'Imovel negociado 2021',
    'Imovel 2 negociado 2021',
    'Compra do ape pro meu pai'
  ]);
});

app.put('/projects/:id', (request, response) => {
  return response.json([
    'freella3',
    'freella4',
    'freella5'
   ]);
})

app.listen(3333, () => {
  console.log('Backend STARTED!*!*!*')
});

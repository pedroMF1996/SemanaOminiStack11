const express = require("express");
const routes = require('./routes');
const app = express();

app.use(express.json());

/**
 * Rota /Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * 
 * POST: Criar uma informação do back-end
 * 
 * PUT: Alterar uma informação do back-end
 * 
 * DELETE: Deletar uma informação do back-end
 */

/**
 * Tipos de parametros
 * Query Params: Parametros nomeados enviados na rota após "?"(filtros,paginação)
 * Rote Params: Parametros usados pra identificar recursos
 * 
 * Request Body: Corpo da requisição usado para criar ou alterar recursos
 */

/**
 * Tipos de banco de dados
 *     SQL: MySQL, SQLite, PostgreSQL, Oracle, MSSQL
 *     NOSQL: MONGODB, COUCHDB, etc;
 */

/**
 * Driver: SELECT * FROM users
 * Query builder: table(users).select('*').where();
 *  KNEX.JS
 */


app.listen(3333);
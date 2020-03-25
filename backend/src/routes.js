const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const routes = express.Router();

routes.post('/ongs', OngController.create);

routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentsController.create);

routes.get('/incidents', IncidentsController.index);

module.exports = routes;
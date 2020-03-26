const express = require('express');
const ongController = require('./controllers/OngsController');
const incidentsController = require('./controllers/IncidentsController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionContoller');
const routes = express.Router();

//Session - Controle de Login 
routes.post('/session', sessionController.create);
// ONGS
routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

//INCIDENTS
routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

//Profile - Lista todos os incidentes especificos de uma ONG
routes.get('/profile', profileController.index);

module.exports = routes; //exporto  para outros arquios .js utiliza-la
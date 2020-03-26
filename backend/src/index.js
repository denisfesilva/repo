const express = require('express'); //Importo o express
const cors = require('cors'); // Importa modulo de segurança cors
const routes = require('./routes'); //Utilizo ./ para informar que é um arquivo não um pacote

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); //Escuto a porta 3333 - backend


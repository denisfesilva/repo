const express = require('express'); //Importo o express

const app = express(); 

app.get('/contato' , (request, response) => {
    return response.json({
        name: 'Denis F Silva',
        evento: "Semana Omnistack"
    });
});

app.listen(3333); //Escuto a porta 3333 - backend




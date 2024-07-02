const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const compromissoController = require('./controllers/compromisso');

app.post('/api/compromisso', compromissoController.createCompromisso);

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
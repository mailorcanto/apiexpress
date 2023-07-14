import express from 'express';

import {config} from 'dotenv';

config();

const app = express();

const port = process.env.PORT || 3333;

app.get('/gremio', (request, response) => response.send('O Grêmio vai sair campeão'));

app.listen(port, () => console.log('Listening on port 3333'));


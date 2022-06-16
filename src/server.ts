import express from 'express';
import '@controllers/UserControllers';

const app = express();

app.get('/', (req, res) => res.json('Server Running'));

app.listen(3333);

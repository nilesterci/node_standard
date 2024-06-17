import express from 'express';

const app = express();

app.get('usuarios', (req, res) => {
    res.send('Deu certo');
});

app.listen(3000);

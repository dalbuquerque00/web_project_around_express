const express = require('express');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();
const { PORT = 3000 } = process.env;

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use((req, res) => {
  res.status(404).send({ message: 'A solicitação não foi encontrada' });
});

app.use((err, req, res) => {
  res.status(500).send({ message: 'Ocorreu um erro no servidor' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
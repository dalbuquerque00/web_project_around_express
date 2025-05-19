const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/aroundb')
  .then(() => {
    console.log('Conexão com MongoDB bem sucedida');
  })
  .catch((err) => {
    console.error('Erro ao tentar conectar com MongoDB:', err);
  });

app.use(express.json());
// ID de usuario teste do Postman
app.use((req, res, next) => {
  req.user = {
    _id: '682754521b00ad0324c96eb8',
  };
  next();
});

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use((req, res) => {
  res.status(404).send({ message: 'Recurso solicitado não encontrado' });
});

app.use((err, req, res) => {
  res.status(500).send({ message: 'Ocorreu um erro no servidor' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});

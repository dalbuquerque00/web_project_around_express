const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(() => res.status(500).send({ message: 'Erro do servidor' }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then((card) => res.status(201).send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Dados inválidos para criar o cartão' });
      } else {
        res.status(500).send({ message: 'Erro do servidor' });
      }
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .orFail()
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: 'ID da cartão inválido' });
      } else if (err.name === 'DocumentNotFoundError') {
        res.status(404).send({ message: 'Cartão não encontrado' });
      } else {
        res.status(500).send({ message: 'Erro do servidor' });
      }
    });
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail()
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: 'ID da cartão inválido' });
      } else if (err.name === 'DocumentNotFoundError') {
        res.status(404).send({ message: 'Cartão não encontrado' });
      } else {
        res.status(500).send({ message: 'Erro do servidor' });
      }
    });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail()
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: 'ID do cartão inválido' });
      } else if (err.name === 'DocumentNotFoundError') {
        res.status(404).send({ message: 'Cartão não encontrado' });
      } else {
        res.status(500).send({ message: 'Erro do servidor' });
      }
    });
};

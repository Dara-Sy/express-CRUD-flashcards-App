const Flashcard = require('../models/flashcard')
const flashcardsController = {};

flashcardsController.index = (req, res) => {
  Flashcards.findAll()
  .then(flashcards => {
    res.status(200).render('flashcards/flashcards-index', {flashcards:flashcards});
  })
  .catch( err => {
    console.log(err);
    res.status(500).json({error:err});
  });
};

flashcardsController.show = (req, res) => {
  Flashcard.findById(red.params.id)
  .then(flashcard => {
    res.status(200).render('flashcards/flashcards-show', {flashcard:flashcard});
  })
  .catch( err => {
    console.log(err);
    res.status(500).json({error:err});
  });
};

flashcardsController.create = (req, res) => {
  Flashcard.create({
    question: red.body.question,
    answer: req.body.answer,
    category: req.body.category,
    difficulty: req.body.difficulty,
  })
  .then(flashcard => {
    res.redirect(`flashcards/${flashcard.id}`);
  })
  .catch( err => {
    console.log(err);
    res.status(500).json({error:err});
  });
};

flashcardsController.edit = (req, res) => {
  Flashcard.findById(req.params.id)
  .then(flashcard => {
    res.status(200).render('flashcards/flashcards-edit', {flashcard: flashcard});
  })
  .catch( err => {
    console.log(err);
    res.status(500).json({error:err});
  });
};

flashcardsController.update = (req, res) => {
  Flashcard.create({
    question: red.body.quetsion,
    answer: req.body.answer,
    category: req.body.category,
    difficulty: req.body.difficulty,
  })




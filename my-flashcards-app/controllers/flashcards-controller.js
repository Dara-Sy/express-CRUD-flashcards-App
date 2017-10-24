//Importing our flashcard model file
const Flashcard = require('../models/flashcard');

//Initializing empty object
const flashcardsController = {};

//Creating function to render the flashcards-index.ejs page
//after receiving promise of query from database
//Will assign the staus 200
//else, will indicate error on server side
flashcardsController.index = (req, res) => {
  Flashcard.findAll()
    .then(flashcards => {
      res.status(200).render('flashcards/flashcards-index',
      {flashcards: flashcards});
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({error:err});
    });
};

//Creating function to show specific id requested by user
//The flashcards-show.ejs page will be rendered upon request
//after receiving promise of query from database
//Will assign the staus 200
//else, will indicate error on server side
flashcardsController.show = (req, res) => {
  Flashcard.findById(req.params.id)
    .then(flashcard => {
      res.status(200).render('flashcards/flashcards-show',
      {flashcard: flashcard});
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({error:err});
    });
};

//Creating function to show a created flashcard by user
//Will show the new flashcard page
//after receiving promise of query from database's new entry
//else, will indicate error on server side
flashcardsController.create = (req, res) => {
  Flashcard.create({
    question: req.body.question,
    answer: req.body.answer,
    category: req.body.category,
    difficulty: req.body.category,
   })
   .then(flashcard => {
      res.redirect(`flashcards/${flashcard.id}`,
      {flashcard: flashcard});
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({error:err});
    });
};

//Creating function to render the flashcards-edit.ejs page
// where user can edit an existing flashcard
//after receiving promise of query from database using id
//Will assign the staus 200
//else, will indicate error on server side
flashcardsController.edit = (req, res) => {
  Flashcard.findById(req.params.id)
    .then(flashcard => {
      res.status(200).render('flashcards/flashcards-edit',
      {flashcard: flashcard});
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({error:err});
    });
};

//Creating function to render the updated flashcard page
//after receiving promise of query from database's new entry
//else, will indicate error on server side
flashcardsController.update = (req, res) => {
  Flashcard.update({
    question: req.body.question,
    answer: req.body.answer,
    category: req.body.category,
    difficulty: req.body.category,
  }, req.params.id)
   .then(flashcard => {
      res.redirect(`/flashcards/${flashcard.id}`,
      {flashcard: flashcard});
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({error:err});
    });
};

//Creating function to deletea flashcard from database
//after receiving promise of query from database
//Will redirect to flashcards page
//Will assign the staus 200
//else, will indicate error on server side
flashcardsController.delete = (req, res) => {
  Flashcard.destroy(req.params.id)
    .then(() => {
      res.redirect('/flashcards',
      {flashcard: flashcard});
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({error:err});
    });
};

//Exporting our controlller for use with the routes file
module.exports = flashcardsController

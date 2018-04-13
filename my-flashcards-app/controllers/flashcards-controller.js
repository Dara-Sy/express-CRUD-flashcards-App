// import the Flashcard module
const Flashcard = require('../models/flashcard');
// Create a flashcardsController
const flashcardsController = {};

// Creating index middleware function
/**
   * Middleware function:
   * Get all the flashcards and set them in res.status
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @return {undefined}
   */
flashcardsController.index = (req, res) => {
  Flashcard.findAll()
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
 /**
   * Create Middleware:
   * Get flashcard data from the front-end and set it in the DB
   * Sets the results of the insertion into req.body
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @return {undefined}
   */
flashcardsController.create = (req, res) => {
  Flashcard.create({
    question: req.body.question,
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

/**
   * @func showEditForm
   * @desc Show a pre-filled HTML form
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @return {undefined}
   */

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
 /**
   * Update Middleware:
   * Get flashcard data from the DB;
   * Merge the data from the front-end;
   * Set it in the DB;
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @return {undefined}
   */

flashcardsController.update = (req, res) => {
  Flashcard.update({
    question: red.body.question,
    answer: req.body.answer,
    category: req.body.category,
    difficulty: req.body.difficulty,
  }, req.params,id)
  .then(flashcard => {
    res.redirect(`/flashcards/${flashcard.id}`);
  })
  .catch( err => {
    console.log(err);
    res.status(500).json({error:err});
  });
};

  /**
   * @func destroy
   * @desc Destroy the flashcard
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */

flashcardsController.delete = (req, res) => {
  Flashcard.destroy(req.params.id)
  .then(() => {
    res.redirect('/flashcards');
  })
    .catch( err => {
      console.log(err);
      res.status(500).json({error:err});
    });
};

module.exports = flashcardsController;







//Importing the express module
const express = require('express');

//Will allow us to create a middleware routing handler for different requests
const flashcardsRouter = express.Router();

//Importing our controller file
const flashcardsController = require('../controllers/flashcard-controller')

//GET requests to the root path will be handled by the .index method of our controller
flashcardsRouter.get('/', flashcardsController.index);

//GET requests to the /new path will render the flashcards-new.ejs view
flashcardsRouter.get('/new', (req, res) => {
  res.render('flashcards/flashcards-new');
});

//POST requests to the root path will be handled by the .create method of our controller
flashcardsRouter.post('/', flashcardsController.create);

//GET requests to / path with a specific id appended will be handled by the .show method of our controller
flashcardsRouter.get('/:id', flashcardsController.show);

//GET requests to the /id/edit path will be handled by the .edit method of our controller
flashcardsRouter.get('/:id/edit', flashcardsController.edit);

//PUT requests to the /id path will be handled by the .update method of our controller
flashcardsRouter.put('/:id', flashcardsController.update);

//DELETE requests to the /id path will be handled by the .delete method of our controller
flashcardsRouter.delete('/:id', flashcardsController.delete);

//Exporting our router file for use in ther server.js file
module.exports = flashcardsRouter;

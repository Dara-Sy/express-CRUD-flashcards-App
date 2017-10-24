//Importing our config js file to query our database
const db = require('../db/config');

//Initializing an empty object
const Flashcard = {};

//Creating a function that will query the database for all flashcards
Flashcard.findAll = () => {
  return db.query('SELECT * FROM flashcards')
};

//Creating function that will find flashcard by id
//Takes one parameter, id, returns one object
Flashcard.findById = id => {
  return db.one(
    `SELECT * FROM flashcards
     WHERE id = $1`, [id]);
};

//Creating function that will create a flashcard given various inputs
//Will insert this flashcard into the table
//will also return the row it just inserted
Flashcard.create = flashcard => {
  return db.one(
    `INSERT INTO flashcard (question, answer, difficulty, category)
     VALUES ($/question/, $/answer/, $/difficulty/, $/category/)
     RETURNING *`,
     [flashcard.question, flashcard.answer, flashcard.difficulty, flashcard.category]
  );
};

//Created functipn that will update a flashcard, according to id specified by Users
//Takes two arguments, flashcard and id
//Will return updated flashcard
Flashcard.update = (flashcard, id) => {
  return db.one(
    `UPDATE flashcard SET
     question = $/question/,
     answer = $/answer/,
     difficulty = $/difficulty/,
     category = $/category/
     WHERE id = $/id/
     RETURNING *`,
     [flashcard.question, flashcard.answer, flashcard.difficulty,flashcard.category, id ]
  );
};

//Created function that will delete a flashcard according to id specified by user
//will not return anything
Flashcard.destroy = id => {
  return db.none(
    `DELETE FROM flashcards
    WHERE id = $/id/`,
    [id]
  );
};

//exporting model object to controller
module.exports = Flashcard;

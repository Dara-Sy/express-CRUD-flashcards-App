//Importing our config js file to query our database
const db = require('../config/connection');

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
    `INSERT INTO flashcards (question, answer, difficulty, category)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
     [flashcard.question, flashcard.answer, flashcard.difficulty, flashcard.category]
  );
};

//Created functipn that will update a flashcard, according to id specified by Users
//Takes two arguments, flashcard and id
//Will return updated flashcard
Flashcard.update = (flashcard, id) => {
  return db.one(
    `UPDATE flashcards SET
     question = $1,
     answer = $2,
     difficulty = $3,
     category = $4
     WHERE id = $5
     RETURNING *`,
     [flashcard.question, flashcard.answer, flashcard.difficulty,flashcard.category, id ]
  );
};

//Created function that will delete a flashcard according to id specified by user
//will not return anything
Flashcard.destroy = id => {
  return db.none(
    `DELETE FROM flashcards
    WHERE id = $1`,
    [id]
  );
};

//exporting model object to controller
module.exports = Flashcard;

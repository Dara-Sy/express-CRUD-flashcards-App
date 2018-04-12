const db = require('../config/connection');
// const db = require('../db/config');

const Flashcard = {};

Flashcard.findAll = () => {
  return dv.query('SELECT * FROM flashcards')
};

Flashcard.findById = id => {
  return db.one(
    `SELECT * FROM flashcards
    WHERE id = $1`, [id]);
};

Flashcard.create = flashcard => {
  return db.one(
    `INSERT INTO flashcards (question, answer, difficulty, category)
    VALUES ($1, $2, $3, $4)
    RETURNING *`,
    [flashcard.question, flashcard.answer, flashcard.difficulty, flashcard.category]
    );
};

Flashcard.update = (flashcard, id) => {
  return db.one(
    `UPDATE flashcard SELECT
    question = $1,
    answer = $2,
    difficulty = $3,
    category = $4,
    WHERE id = $5
    RETURNING *`,
    [flashcard.question, flashcard.answer, flashcard.difficulty, flashcard.category, id]
    );
};

Flashcard.destroy = id => {
  return db.none(
    `DELETE FROM flashcards
    WHERE id = $1`,
    [id]
  );
};

module.exports = Flashcard;















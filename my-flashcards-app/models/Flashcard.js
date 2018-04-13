/**
 * @module quoteDB
 * @desc this module is the interface for the database. It contains
 * CRUD methods in SQL to talk to the database.
 * Each function returns a promise
 */
 // all of this is in Connections

// Require pg-promise, and execute it like a function.
// Require our DB config

const db = require('../config/connection');
// const db = require('../db/config');

const Flashcard = {};

  /**
   * @func findAll
   * @desc search through all the flashcards
   * @returns {Promise}
   * @hint this
   */
Flashcard.findAll = () => {
  return dv.query('SELECT * FROM flashcards')
};

  /**
   * @func findById
   * @param id {number} - the ID of the flashcard to search for
   * @desc search through the flashcards and find by an ID
   * @returns {Promise}
   */

Flashcard.findById = id => {
  return db.one(
    `SELECT * FROM flashcards
    WHERE id = $1`, [id]);
};

/**
   * Create one flashcard from DB
   * @param {number} id - the id of a flashcard
   * @returns {Promise}
   */

Flashcard.create = flashcard => {
  return db.one(
    `INSERT INTO flashcards (question, answer, difficulty, category)
    VALUES ($1, $2, $3, $4)
    RETURNING *`,
    [flashcard.question, flashcard.answer, flashcard.difficulty, flashcard.category]
    );
};

/**
   * Update one flashcard from DB
   * @param {number} id - the id of a flashcard
   * @returns {Promise}
   */

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

/**
   * Destroy one flashcard from DB
   * @param {number} id - the id of a flashcard
   * @returns {Promise}
   */

Flashcard.destroy = id => {
  return db.none(
    `DELETE FROM flashcards
    WHERE id = $1`,
    [id]
  );
};

module.exports = Flashcard;















-- this is to connect schema.sql to the database flashcards_dev --
\c flashcards_dev


-- drop any existing table, because we will work to isolate the new table
DROP TABLE IF EXISTS flashcards;

-- create new table called flashcards
CREATE TABLE flashcards(
  id SERIAL PRIMARY KEY,
  question VARCHAR(255),
  answer VARCHAR(255),
  difficulty INT,
  category VARCAR(255)
  );

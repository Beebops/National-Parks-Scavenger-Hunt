DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS parks CASCADE;
DROP TABLE IF EXISTS hunts CASCADE;
DROP TABLE IF EXISTS species CASCADE;
DROP TABLE IF EXISTS hunts_species CASCADE;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  user_password VARCHAR(100) NOT NULL 
);

CREATE TABLE parks (
  park_id VARCHAR(10) PRIMARY KEY,
  park_name VARCHAR(100) NOT NULL,
  park_state VARCHAR(50) NOT NULL,
  park_description TEXT,
  park_image TEXT
);

CREATE TABLE hunts (
  hunt_id SERIAL PRIMARY KEY,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  park_id VARCHAR(10),
  FOREIGN KEY (park_id) REFERENCES parks(park_id),
  hunt_title VARCHAR(100) NOT NULL,
  is_complete BOOLEAN NOT NULL,
  date_started DATE,
  date_completed DATE
);

CREATE TABLE species (
  species_id SERIAL PRIMARY KEY,
  scientific_name VARCHAR(100) NOT NULL,
  common_name VARCHAR(100) NOT NULL,
  species_description TEXT,
  species_image TEXT,
  species_wikipedia_link TEXT
);

CREATE TABLE hunts_species (
  hunt_id INT,
  species_id INT,
  PRIMARY KEY (hunt_id, species_id),
  FOREIGN KEY (hunt_id) REFERENCES hunts(hunt_id),
  FOREIGN KEY (species_id) REFERENCES species(species_id)
);
INSERT INTO users (username, email, user_password)
VALUES ('testuser', 'testuser@example.com', 'password123');

INSERT INTO parks (park_id, park_name, park_state, park_description, park_image)
VALUES ('POO1', 'Test National Park', 'TP', 'A beautiful and imaginary national park for testing purposes.', 'https://www.nps.gov/common/uploads/structured_data/3C79931C-1DD8-B71B-0BF201E3DB540D04.jpg');

INSERT INTO hunts (user_id, park_id, hunt_title, is_complete, date_started, date_completed)
VALUES (1, 'POO1', 'Test Hunt', FALSE, '2023-01-01', NULL);

INSERT INTO species (scientific_name, common_name, species_description, species_image, species_wikipedia_link)
VALUES ('Testus animalis', 'Test Animal', 'A fictional species created for testing purposes.', 'https://en.wikipedia.org/wiki/File:Bald_Eagle_Portrait.jpg', 'https://en.wikipedia.org/wiki/Bald_eagle');

INSERT INTO hunts_species (hunt_id, species_id)
VALUES (1, 1);
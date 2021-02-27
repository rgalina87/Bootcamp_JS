SELECT name
FROM language

SELECT title, description, language.name
FROM film
INNER JOIN language using(language_id)

SELECT title, description, language.name
FROM film
RIGHT JOIN language using(language_id)

SELECT title, description, language.name
FROM film
LEFT JOIN language using(language_id)

CREATE TABLE new_films(
id SERIAL PRIMARY KEY,
name VARCHAR(500) NOT NULL	
)

CREATE TABLE customer_review(
id SERIAL PRIMARY KEY,
review VARCHAR(1000),
id_film INT NOT NULL,
customer_id INT NOT NULL	
FOREIGN KEY id_film REFERENCES film(film_id)
FOREIGN KEY customer_id REFERENCES customer(customer_id)
)

DELETE FROM customer_review
WHERE film_id IS NULL
RETURNING *
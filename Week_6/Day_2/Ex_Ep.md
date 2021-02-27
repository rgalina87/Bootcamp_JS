CREATE TABLE items (
item_id SERIAL PRIMARY KEY,
name VARCHAR (50) NOT NULL,
price INTEGER 
)

CREATE TABLE customers (
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL
)

INSERT INTO items (name, price)
VALUES ('Small Desk', '100'),
		('Large desk', '300'),
		('Fan', 80)

INSERT INTO customers (first_name, last_name)
VALUES ('Greg', 'Jones'),
		('Sandra', 'Jones'),
		('Scott', 'Scott'),
		('Trevor', 'Green'),
		('Melanie', 'Johnson')

--1
SELECT *
FROM items
ORDER BY price

SELECT *
FROM items
WHERE price < 80
ORDER BY price DESC

SELECT *
FROM customer
LIMIT 3

SELECT last_name
FROM customer
ORDER by last_name DESC

--2
CREATE TABLE purchases(
customer_id INTEGER NOT NULL
item_id INTEGER NOT NULL
FOREIGN KEY customer_id REFERENCES customers(customer_id)
FOREGN KEY item_id REFERENCES items(item_id)
)


SELECT *
FROM customer
-- 
SELECT   first_name || ' ' || last_name AS full_name
FROM customer
-- 
SELECT *
FROM customer
ORDER BY first_name DESC
-- 
SELECT film_id, description, title, release_year, rental_rate 
FROM film
ORDER BY rental_rate 
-- 
SELECT address, district, phone
FROM address
WHERE district = 'Texas'
-- 
SELECT *
FROM film
WHERE film_id = '15' and film_id='150'
-- 
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'Van Helsing'
-- 
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'va%'

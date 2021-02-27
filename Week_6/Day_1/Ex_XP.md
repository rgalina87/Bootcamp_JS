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

SELECT * FROM items
WHERE price > 80
WHERE price <300
SELECT * FROM customers
WHERE last_name = 'Smith'
WHERE last_name = 'Jones'
WHERE first_name NOt first_name = 'Scott'




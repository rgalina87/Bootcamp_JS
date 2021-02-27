 CREATE TABLE items (
 id_item SERIAL PRIMARY KEY,
 name_item VARCHAR (100) NOT NULL,
 quant_item INTEGER,
 price_item INTEGER NOT NULL
 )

 CREATE TABLE users (
	id_user SERIAL PRIMARY KEY,
	club_card INTEGER, 
	first_name VARCHAR (100) NOT NULL,
	last_name VARCHAR (100) NOT NULL
	order_sum INTEGER 
)

CREATE TABLE orders (
	id_order SERIAL PRIMARY KEY,
	order_sum INTEGER NOT NULL,
	id_item INTEGER NOT NULL,
	id_user INTEGER NOT NULL,
	name_item VARCHAR (100) NOT NULL,
	price_item INTEGER NOT NULL,
	amount_item INTEGER NOT NULL,
	FOREIGN KEY (id_item) REFERENCES items(id_item),
	FOREIGN KEY (id_user) REFERENCES users(id_user) 
)

SELECT orders.order_sum
FROM orders
INNER JOIN users
ON orders.order_sum = users.order_sum

SELECT orders.id_user
FROM orders
RIGHT JOIN users
ON orders.id_user = users.id_user

SELECT orders.id_user
FROM orders
LEFT JOIN users
ON orders.id_user = users.id_user
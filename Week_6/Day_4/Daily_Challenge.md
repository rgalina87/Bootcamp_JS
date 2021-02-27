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

Create a function that returns the total price for a given order of a given user
create function total_price(price int)
returns int
language plpgsql
as
$$
declare
	total integer
begin
	select SUM(price_item)
	into total
	from orders

	return total
end
$$;
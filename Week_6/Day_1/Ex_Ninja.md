CREATE TABLE students (
id SERIAL PRIMARY KEY,
last_name VARCHAR (50) NOT NULL,
first_name VARCHAR (50) NOT NULL,
birth_date DATE NOT NULL, 
)

INSERT INTO students (first_name, last_name, birth_date)
VALUES ('Marc', 'Benichou', '02/11/1998'),
		('Yoan', 'Cohen', '03/12/2010'),
		('Lea' 'Benichou', '27/07/1987'),
		('Amelia', 'Dux', '07/04/1996'),
		('David', 'Grez', '14/06/2003'),
		('Omer', 'Simpson', '03/10/1980'),
		('Gali', 'Ru', '09/02/19..')

<!-- SELECT *  -->
<!-- SELECT MIN(birth_date) -->
<!-- FROM students
ORDER BY last_name
LIMIT 4
OFFSET 2 ROWS
FETCH NEXT 3 ROWS ONLY -->
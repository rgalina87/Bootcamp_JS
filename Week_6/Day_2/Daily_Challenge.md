CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)
-- create table FirstTab

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')
-- add data

SELECT * FROM FirstTab
-- display all data

CREATE TABLE SecondTab (
    id integer 
)
-- create table SecondTab

INSERT INTO SecondTab VALUES
(5),
(NULL)
-- add data

SELECT * FROM SecondTab
-- display all data

-- --Q1. What will be the OUTPUT of the following statement?

SELECT COUNT(*) 
FROM FirstTab a WHERE a.Id NOT IN ( SELECT Id FROM SecondTab WHERE Id IS NULL )
--0

-- -- Q2. What will be the OUTPUT of the following statement?

SELECT COUNT(*) 
FROM FirstTab a WHERE a.Id NOT IN ( SELECT Id FROM SecondTab WHERE Id = 5 )
-- 2

-- --Q3. What will be the OUTPUT of the following statement?

SELECT COUNT(*) 
FROM FirstTab a WHERE a.Id NOT IN ( SELECT Id FROM SecondTab )

--0
-- -- Q4. What will be the OUTPUT of the following statement?

SELECT COUNT(*) 
FROM FirstTab a WHERE a.Id NOT IN ( SELECT Id FROM SecondTab WHERE Id IS NOT NULL )
--2
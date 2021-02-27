-- --Basic Select Statement
--1
SELECT first_name "First Name", last_name "Last Name"
FROM employees;

--2
SELECT DISTINCT department_id
FROM employees;

--3
SELECT *
FROM employees
ORDER BY first_name DESC;

--4
SELECT first_name, last_name, salary, salary * 0.15 AS PF
FROM employees;

--5
SELECT employee_id, first_name, last_name, salary
FROM employees
ORDER BY salary;

--6
SELECT SUM(salary)
FROM employees;

--7
SELECT MAX(salary), MIN(salary)
FROM employees;

--8
SELECT AVG(salary)
FROM employees;

--9
SELECT COUNT(*)
FROM employees;

--10
SELECT UPPER(first_name)
FROM employees;

--11
SELECT first_name
FROM employees
LIMIT 3

--12
SELECT CONCAT(first_name,' ', last_name)
FROM employees;

--13
SELECT first_name, last_name, LENGTH(CONCAT(first_name,' ', last_name))
FROM employees;

--14
SELECT * 
FROM employees 
WHERE  first_name ;

--15
SELECT *
FROM employees
LIMIT 10;

-- --Restricting And Sorting
--1
SELECT CONCAT(first_name,' ', last_name), salary
FROM employees
WHERE salary BETWEEN 10000 AND 15000;

--2
SELECT CONCAT(first_name,' ', last_name), hire_date 
FROM employees
WHERE EXTRACT(YEAR FROM hire_date) = 1987;

--3
SELECT first_name
FROM employees
WHERE first_name LIKE '%c% AND %e%';

--4
SELECT last_name, salary
FROM employees
WHERE (
	SELECT job_title
	FROM jobs
	WHERE job_title != 'Programmer' OR job_title != 'Shipping Clerk'
) 
AND (salary = 4500 OR salary = 10000 OR salary = 15000)

--5
SELECT last_name
FROM employees
WHERE LENGTH(last_name) = 6

--6
SELECT last_name
FROM employees
WHERE last_name = SUBSTRING(last_name, 2, 2)

--7
SELECT *
FROM employees
WHERE last_name = 'JONES' OR last_name = 'BLAKE' OR last_name ='SCOTT' OR last_name ='KING' OR last_name ='FORD'
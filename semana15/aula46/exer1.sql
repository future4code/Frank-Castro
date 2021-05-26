SELECT * FROM Moves;

SELECT * FROM Actor
WHERE 
(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;

SET SQL_SAFE_UPDATES = 0;

SELECT * FROM Moves;

SELECT id, salary from Actor;

SELECT id, name from Actor WHERE gender = "male";

SELECT id, name from Actor WHERE gender = "female";

SELECT salary from Actor WHERE name = "Tony Ramos";

SELECT * FROM Actor WHERE gender = "invalid";
/* DEU NULL */

SELECT id, name, salary from Actor WHERE salary < 500000;

SELECT id, nome from Actor WHERE id = "002";
/* NAME ESTAVA ESCRITO EM PORTUGUES  */

SELECT id, name from Actor WHERE id = "002";

SELECT id, title from Moves WHERE id = "002";

SELECT * FROM Moves
WHERE title LIKE "%B%" OR synopsis LIKE "%b%";

SELECT * FROM Moves
WHERE release_date < "2020-05-04";
/*-------------------------------------------------------------*/

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor
SET 
	name = "Lolinha da Linha",
	birth_date = "1900-05-04"
WHERE id = "001";

UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";

UPDATE Actor
SET 
    name = "Machild",
    salary = 50000,
    birth_date = "1950-05-04",
    gender = "male"
WHERE id = "008";

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor 
WHERE 
gender = "male" AND
salary > 1000000;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

ALTER TABLE Moves ADD playing_limit_date DATE;

ALTER TABLE Moves CHANGE assessment assessment FLOAT;

UPDATE Moves
SET
	playing_limit_date = "2019-10-31"
WHERE id = "002";

DELETE FROM Moves WHERE id = "003";

UPDATE Moves
SET
	synopsis = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
WHERE id = "003";
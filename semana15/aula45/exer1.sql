SELECT * FROM Actor
WHERE 
(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;

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



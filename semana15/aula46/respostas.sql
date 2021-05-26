### Exercício 1
a) A resposta da pergunta é: deletaria a coluna salary
b) A resposta da pergunta é: muda o nome da coluna para sex
c) A resposta da pergunta é: muda o máximo de caracteres para 255
d) A query é:
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
### Exercício 2
a) A query é: 
```
UPDATE Actor
SET 
	name = "Lolinha da Linha",
	birth_date = "1900-05-04"
WHERE id = "001";
```

b) A query é: 
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
``` 

c) A query é: 
```
UPDATE Actor
SET 
    name = "Machild",
    salary = 50000,
    birth_date = "1950-05-04",
    gender = "male"
WHERE id = "005";
```

d) A resposta da pergunta é: 
```
3	18	14:08:25	UPDATE Actor
 SET 
     name = "Machild",
     salary = 50000,
     birth_date = "1950-05-04",
     gender = "male"
 WHERE id = "008"	0 row(s) affected
 Rows matched: 0  Changed: 0  Warnings: 0	0.156 sec 
```

### Exercício 3

a) A query é: 
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b) A query é: 
```
DELETE FROM Actor 
WHERE 
gender = "male" AND
salary > 1000000
```

### Exercício 4

a)  A query é:
```
SELECT MAX(salary) FROM Actor
```

b)  A query é:
```
SELECT MIN(salary) FROM Actor
```
c)  A query é:
```
SELECT COUNT(*) FROM Actor WHERE gender = "female"
```
d)  A query é:
```
SELECT SUM(salary) FROM Actor
```

### Exercício 5

a) A resposta da pergunta é: ele indica a quantidade de pessoas de cada genero na tabela 

b) A query é:
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c) A query é:
```
SELECT * FROM Actor
ORDER BY salary;
```
d) A query é:
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
e) A query é:
```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

### Exercício 6

a) A query é:
```
ALTER TABLE Moves ADD playing_limit_date DATE;
```


b) A query é:
```
ALTER TABLE Moves CHANGE rating rating FLOAT;
```

c) A query é:
```
UPDATE Moves
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001"
```

d) A query é:
```
?????????????????
```

### Exercício 7

a) A query é: 
```
SELECT COUNT(*) FROM Moves WHERE rating > 7.5;
```

b) A query é: 
```
SELECT AVG(assessment) FROM Moves;
```

c) A query é: 
```
SELECT COUNT(*) FROM Moves WHERE playing_limit_date > CURDATE();
```

d) A query é: 
```
SELECT COUNT(*) FROM Moves WHERE release_date > CURDATE();
```

e) A query é: 
```
SELECT MAX(rating) FROM Moves;
```

f) A query é: 
```
SELECT MIN(rating) FROM Moves;
```

### Exercício 8

a) A query é: 
```
SELECT * FROM Moves ORDER BY title;
```

b) A query é: 
```
SELECT * FROM Moves ORDER BY title LIMIT 5;
```

c) A query é: 
```
SELECT * FROM Moves 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
```

d) A query é: 
```
SELECT * FROM Moves 
ORDER BY rating DESC 
LIMIT 3;
```
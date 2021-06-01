### Exercício 1
a) /*CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
	ELE CRIA UMA TABELA COM ALGUMAS CARACTERISTICAS	
    */

b) /*SHOW DATABASES;
	ELE EXIBE A INFORMAÇOES DO DATABASE
	cruz-2114497-frank-filho
	information_schema
    */
    
c) /*
	ELE EXECUTA AS INFORMAÇÕES DA TABELA E EXIBE
   */

### Exercício 2
a)  /*INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23 ", 
  "male"
);*/

b) 

c) /*CRIEI ALGUMAS QUERYS QUE ADICIONARAM ATORES COMO
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
*/

### Exercício 3

a) /*
	SELECT * FROM Actor
  */
  
b) /*
 SELECT salary from Actor WHERE name = "Tony Ramos";
*/

c) /*
	SELECT * FROM Actor WHERE gender = "invalid";
	DEU NULL 
  */

d) /*
	SELECT id, name, salary from Actor WHERE salary < 500000;
  */  
  
e) /*
	SELECT id, nome from Actor WHERE id = "002";
    
	NAME ESTAVA ESCRITO EM PORTUGUES  
    
    SELECT id, name from Actor WHERE id = "002";
  */  

### Exercício 4

a) /*
	ela fazer u, filtro restringindo os valores para name e salary, dando condiçoes
  */
  
b) /*
	SELECT * FROM Actor
    WHERE (name LIKE "A%" ) AND salary > 300000;
  */  
  
c) /*
	SELECT * FROM Actor
	WHERE (name LIKE "%G%" OR name LIKE "%g%");
  */  

d) /*
	SELECT * FROM Actor
	WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
	AND salary BETWEEN 350000 AND 900000;
  */
  
### Exercício 5

	/*CREATE TABLE Moves (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    assessment FLOAT NOT NULL
	);*/
    
    /*
    INSERT INTO Moves (id, title, synopsis, release_date, assessment)
	VALUES(
	  "004", 
	  "Bacurau",
	  "Os moradores de Bacurau, um pequeno povoado do sertão brasileiro, descobrem que a comunidade não consta mais em qualquer mapa. 
	  Aos poucos, eles percebem algo estranho na região: enquanto drones passeiam pelos céus, estrangeiros chegam à cidade. Quando carros são 
	  baleados e cadáveres começam a aparecer, Teresa, Domingas, Acácio, Plínio, Lunga e outros habitantes chegam à conclusão de que estão sendo atacados. 
	  Agora, o grupo precisa identificar o inimigo e criar coletivamente um meio de defesa.",
	  "2019-08-23", 
	  8
	);
    */

### Exercício 6

a) /*
	SELECT id, title from Moves WHERE id = "002";
  */  
  
b) /*
	SELECT * FROM Movie WHERE name = "Deus é Brasileiro";
  */  
  
c) /*
	SELECT id, title, synopsis FROM Movie WHERE rating > 7;
  */  
  
### Exercício 7

a) /*
	SELECT * FROM Movie
	WHERE title LIKE "%vida%";
  */  
  
b) /*
	SELECT * FROM Movie WHERE title LIKE "%b%" OR
      synopsis LIKE "%c%";
  */  
  
c) /*
	SELECT * FROM MOVIE
	WHERE release_date < "2020-05-04";
  */  
  
d) /*
	SELECT * FROM Moves WHERE
	release_date < '2020-05-04' AND (title LIKE '%S%' OR synopsis LIKE '%C%') AND rating > 7;
  */  
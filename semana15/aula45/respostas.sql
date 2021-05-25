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
    
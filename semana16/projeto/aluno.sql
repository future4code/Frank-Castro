SELECT * FROM student;

CREATE TABLE student(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
birthday DATE NOT NULL,
hobby VARCHAR(255) NOT NULL,
classId INT NOT NULL,
FOREIGN KEY (classId ) REFERENCES class(id)
);

INSERT INTO student (`name`, `email`, `birthday`, `hobby`, `classId`) VALUES ('Frank','frank@labenu','2000/03/01', 'desenhar', '1');
INSERT INTO student (`name`, `email`, `birthday`, `hobby`, `classId`) VALUES ('Isabelle','Isabelle@labenu','1999/08/02', 'ler', '1');
INSERT INTO student (`name`, `email`, `birthday`, `hobby`, `classId`) VALUES ('Karoline','Karoline@labenu','1990/02/18', 'cantar', '2');
INSERT INTO student (`name`, `email`, `birthday`, `hobby`, `classId`) VALUES ('Claudia','Claudia@labenu','1970/12/12', 'escrever', '2');
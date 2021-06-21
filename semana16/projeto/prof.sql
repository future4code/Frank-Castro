SELECT * FROM teacher;

CREATE TABLE teacher(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
birthday DATE NOT NULL,
specialty VARCHAR(255) NOT NULL,
classId INT NOT NULL,
FOREIGN KEY (classId ) REFERENCES class(id)
);

INSERT INTO teacher (`name`, `email`, `birthday`, `specialty`, `classId`) VALUES ('MateusGesualdo','MateusGesualdo@labenu','1900/03/01', 'Typescript','1');
INSERT INTO teacher (`name`, `email`, `birthday`, `specialty`, `classId`) VALUES ('Yuzo','Yuzo@labenu','1900/09/01', 'Typescript', '1');
INSERT INTO teacher (`name`, `email`, `birthday`, `specialty`, `classId`) VALUES ('AmandaRangel','AmandaRangel@labenu','1900/04/01', 'JS', '2');
INSERT INTO teacher (`name`, `email`, `birthday`, `specialty`, `classId`) VALUES ('LaisPetra','LaisPetra@labenu','1900/05/01', 'JS', '2');
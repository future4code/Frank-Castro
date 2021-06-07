SELECT * FROM class;

CREATE TABLE class(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) UNIQUE NOT NULL,
startDate DATE NOT NULL,
endDate DATE NOT NULL,
module VARCHAR(255)
);

INSERT INTO class (`name`, `startDate`, `endDate`,`module`) VALUES ('cruz', '2021/02/01', '2021/08/01', 'back');
INSERT INTO class (`name`, `startDate`, `endDate`,`module`) VALUES ('Einstein', '2021/08/01', '2022/02/01', 'front');
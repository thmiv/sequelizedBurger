-- creates burger table --

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	burger_eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

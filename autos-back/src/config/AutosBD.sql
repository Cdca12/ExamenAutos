CREATE DATABASE Autos;

USE Autos;

CREATE TABLE Autos (
	AutoID INT NOT NULL auto_increment,
    Modelo varchar(50) NOT NULL,
    Marca varchar(60) NOT NULL,
    Anio varchar(4) NOT NULL,
    Color varchar(20),
    PRIMARY KEY (AutoID)
);

INSERT INTO Autos (Modelo, Marca, Anio, Color)
VALUES 
	('R8', 'Audi', '2008', 'Negro'), 
    ('Mustang', 'Ford', '2010', 'Rojo');
    
/* TEST */
SELECT * FROM Autos

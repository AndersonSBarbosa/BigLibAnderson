
CREATE TABLE Employee(
	Id int IDENTITY(1,1) NOT NULL,
	Nome varchar(50) NULL,
	Salario int NULL
)



INSERT INTO Employee(Nome,Salario) VALUES ('Ana Paula',5000)
INSERT INTO Employee(Nome,Salario) VALUES ('Giovana',6000)
INSERT INTO Employee(Nome,Salario) VALUES ('Laura',3000)
INSERT INTO Employee(Nome,Salario) VALUES ('Josefa',8000)
INSERT INTO Employee(Nome,Salario) VALUES ('Clarisse',5000)
INSERT INTO Employee(Nome,Salario) VALUES ('Zuleide',3500)


select * from Employee

SELECT 
 MAX(Salario) as Salario,
CASE
    WHEN MAX(Salario)  = 0 THEN 'Não há um segundo maior salário'
    WHEN MAX(Salario)  > 0 THEN 'Segundo maior salário'
END AS Obs
FROM Employee
WHERE Salario < (SELECT MAX(Salario) FROM Employee);

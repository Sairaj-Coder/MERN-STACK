USE college;

CREATE TABLE COMPANY(
	ID INT UNIQUE,
    Name VARCHAR(30) NOT NULL,
    Email VARCHAR(40),
    Salary INT DEFAULT 25000,
    age int check(age>=18 AND age<=60)
    
    
    
);



INSERT INTO COMPANY
VALUES
(3,"shirole",null,default,26),
(1,"sai",null,default,20),
(2,"samruddhi",null,30000,19);

SELECT * FROM COMPANY;
-- DROP  TABLE IF EXISTS COMPANY ;-- 

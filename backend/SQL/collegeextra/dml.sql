show databases;
use apna_college;
show tables;
select * from student;
INSERT INTO student
(roll_number, age,NAME)
VALUES 
(1,18,"SAIRAJ"),
(2,19,"SAMRUDDHI"); 

INSERT INTO student
(roll_number, age,NAME)
VALUES 
(6,18,"SAiI"),
(7,19,"SAMi"); 

INSERT INTO STUDENT
(roll_number, age,NAME,FEES)
VALUES 
(15,24,"rutik",199500);

-- remaining opration in dml
-- using logical operator 
select age+roll_number from student;
-- pattern matching = we can select different tables and colunmns here we dont have different table so we select same table notes diffferent values
-- comes into same column
select NAME	from student
union
select age from student; 

-- here it select name starting from r
select * from student
where name like 'r%' and age=24 ;

-- here it will select name ends from j
select * from student
where name like '%j'  ;

-- string function==> basically we are printing name length and name in uppercase 
select upper(name), length(name) from student;

select * from student;









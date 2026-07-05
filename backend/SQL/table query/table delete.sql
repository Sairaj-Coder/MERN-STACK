show databases;
use apna_college;
show tables;
select * from student;
-- to delete any row where condition is used else it will delete all data syntax
-- DELETE FROM table_name
-- where condition;

DELETE FROM student 
where id=1;
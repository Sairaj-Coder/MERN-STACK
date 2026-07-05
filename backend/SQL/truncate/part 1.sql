show databases;
use apna_college;
show tables;
select * from student;

-- basically there are two type first is drop which delete 
-- whole table but trancate delete data inside table not table
-- in case of foreign key we have to truncate that table then primary table
-- syntax=truncate table table_name;

TRUNCATE TABLE student;

select * from student;


-- drop syntax== DROP TABLE table_name



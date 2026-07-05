-- Alter table= to change the schema
-- i.e= to perform operation on columns to change name, datatype, constrain,
-- most important if we want to add new column

show databases;
use apna_college; 
show tables;
select * from student;

-- to add column 
-- SYNTAX is 
-- alter table table_name
-- add column column_name datatype constraint;

alter table student
add column favourite_subject
varchar(30) not null;

-- to delete any column

-- alter table table_name
-- drop column column_name

ALTER TABLE student
DROP COLUMN favourite_subject;

-- to rename any table
-- alter table table_name
-- rename to new_table_name;



ALTER TABLE DATABAS
RENAME TO student;

select * from student;


-- modify column = to (modify datatype/constraint/column name)
-- note even if we want to change name still we have to rewrite its 
-- datatype


-- to change column name


-- ALTER TABLE table_name
-- CHANGE COLUMN old_name new_name_ new_datatype new_constraint;
-- ex

ALTER TABLE student
CHANGE COLUMN id roll_number int not null;



-- to modify the column (modify datatype/constraint)
-- syntax =>  alter table_name
-- ---------  modify col_name new_datatype new_constraint;
-- --------- it is not compulsory to do both things together

alter table student
modify age float not null; 

select * from student;












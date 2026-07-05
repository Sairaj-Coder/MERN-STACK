show databases;
use apna_college;
show tables;
select * from student;

-- to update table i.e to update existing values of
-- of table 
-- syntax = update table_name
-- ------- set col1=val1, col2=val2
-- ------- where condition;
-- when ever we try to update data we cannot do it
-- because by default value is one there first we set it to 0

SET	SQL_SAFE_UPDATES=0;

update student
set FEES=default;

-- we can use where condition also

update student
set FEES=1
where age=18;

select * from student;




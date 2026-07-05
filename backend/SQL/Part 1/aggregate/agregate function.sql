show databases;
use apna_college;
show tables;
select * from student;


-- aggregate are pre-defined funtion 
-- 1.max return maximum count


select  max(age)
from student;


-- 2.count return the total count example we want total count whose age is 20
select count(age)
from student 
where age=18;

-- 3.min to return minimum age/values
select min(age)
from student;

-- 4.average to find out average 
select avg(age)
from student;

-- 5.sum to print sum of all values
select sum(id)
from student;

 
-- group by clauses=grouping data
select * from student;

-- now we have group them by id
select count(id),age 
from student
group by age;

-- now we have to print maximum fees and his id ,age
select age,max(FEES)
FROM student
group by age;


-- note we cannot write the things  except aggregate function 
-- or grouping  NOW FEES is not group or inside aggregate function this will throw error
select age,max(id),FEES
FROM student
group by age;

-- this will not throw error
select age,max(id),max(FEES)
FROM student
group by age;

-- how to print name using where clause

select name,age,id,FEES
from student
where FEES=	(select max(FEES) FROM student);


-- having clauses is used to apply condition on group 
select age,max(FEES)
FROM student
group by age
having max(FEES);


 




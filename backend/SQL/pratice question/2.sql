show databases;
use college;
create table stud(
	id int primary key,
    name varchar(30) not null,
    city varchar(30) default "Pune",
    marks int 

);

insert into stud
(id,name,city,marks)
values
(110,"adam","Delhi",76),
(108,"bob","Mumbai","65"),
(124,"casey","Pune",94),
(112,"duke","Pune",80);


select * from stud
where marks>75;-- 3

-- there is another way instead of grouping
select city, count(name)
from stud
group by city;

select city, max(marks) from stud
group by city;

select avg(marks) from stud;


alter table stud
add column grade varchar(2);
-- updating now

set SQL_SAFE_UPDATES=0;
UPDATE stud
set grade="O"
where marks>80;
--
UPDATE stud
set grade="A"
where marks between 70 and 80;

--
UPDATE stud
set grade="b"
where marks>=60 and marks<70;

select * from stud;












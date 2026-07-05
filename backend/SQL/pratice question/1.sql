show databases;
create database if not exists college ;
USE college;


create table Teacher( 

	id int ,
    primary key(id),
    name varchar(30) not null,
    subject varchar(30) not null,
    salary int default 0

 );

insert into Teacher
(id,name,subject,salary)
values
(23,"ajay","math",50000),
(47,"bharat","english",60000),
(18,"chetan","chemistry",45000),
(9,"divya","physics",75000);

select * from Teacher;

SET SQL_SAFE_UPDATES = 0;

-- select teachers whose salary is more than 55k
select * from Teacher
where salary>55000; -- ans=> 2


-- rename salary column to ctc
alter table Teacher
change column salary ctc int ;

-- update salary of all teachers by giving them an increment 25%

SET SQL_SAFE_UPDATES = 0;
update Teacher
set ctc=ctc+(ctc*(25/100));

select * from Teacher;


-- add new column for teacher called city, the default city should be gurgaon
alter table Teacher
add column city
varchar(30) default "gurgaon";

-- delete salary column 
alter table Teacher
drop column ctc;




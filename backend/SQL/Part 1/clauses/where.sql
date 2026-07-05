create database if not exists clauses;


drop table  if exists profile;
create table profile(
	prn int unique ,
	name varchar(30) not null,
	age int check(age>=18),
    college varchar(50) default "MESCOE",
    result varchar(4) default "pass"


);



insert into profile
(name,prn,age,college,result)
values
("samruddhi",2,19,default,"fail"),
("aboli",3,20,default,default),
("mayur",4,20,default,default),
("mayuri",5,50,default,default),
("sairaj",1,18,default,default);


select * from profile;
-- select unique things remove similar things like same name or same age  show unique name/detail
select distinct age from profile;



select result,name from profile
where result="fail";


select distinct age,name from profile
where age>=40;


-- using arithematic operator with where clause
select name,age from profile
where age+1=20;

-- using logical operator and
select name,age,result from profile
where age+1=21 AND result="pass";
  

-- using logical operator or  
select name,age,result from profile
where age+1=20 or result="fail"; 

-- using between operator select range
select name,age from profile
where age between 15 and 21;

-- we can try it for strings also but no proper soln
select name,age from profile
where name between "sairaj" and "samruddhi";


-- in operator compare this name and show require detail of we have of this name
-- instead of * we can use other things also like name,user
select * from profile
where name in("sairaj","samruddhi","mayuri","etc");
 
-- we can use it as range or to take all data like same age
select name,age from profile
where age in (20,50);
-- now all data which we asked of age 20 and 50 will be printed

-- not operator is operator which gaves data or ignore data which we 
-- enter and gave all remaining data
select * from profile
where name not in ("sairaj");


-- limit clause bascially we can add limit 

select * from profile
limit 2; 
-- now only two will be printed
-- note we can use it with where clause also
-- i.e giving condition
select * from profile
where name not in("sairaj")
limit 3;

-- order by clauses sorting data


select * from profile
order by age asc;


-- understanding order
select * from profile
where age >19
order by age desc
limit 2;




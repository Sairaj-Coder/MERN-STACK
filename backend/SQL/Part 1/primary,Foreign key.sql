use college;
show tables;
create table student2(
 id int unique,
 primary key(id),
 name varchar(30) not null,
 class int

);

-- here we cannot delete student2 directly because foreign key is coonected but we can delete foreign key table directly

 drop tables if exists student2 ; 


create table teacher(
	student_id int,
    foreign key(student_id) references student2(id),
    name varchar(50)
	
);
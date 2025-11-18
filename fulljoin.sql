create table voters(
Id int not null auto_increment PRIMARY key,
Name varchar(255),
age int,
CHECK(age >17) or constraint Voters_age_check check(age>17)
);
 insert into voters(name,age) values('Prakash',20);
 
mysql> insert into voters(name,age) values('likith',16);c:\Users\theji\OneDrive\Desktop\Tutorials\SQL\InnerJoin.sql
select * from country limit 5;
select continent,count(*) as total_contries from country 
group by continent;


UPDATE <table> SET
col1=value
col2=value
col3=value
where<condition>

UPDATE users1
set user_name="krian"
where email="krishna@gmail.com";

/* to alter table name*/
alter table users1 rename to users;
/* to add a column*/
alter table users
add phn_num varchar(10);


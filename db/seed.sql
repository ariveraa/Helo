create table users( 
id serial primary key, 
username varchar(20), 
password varchar(20), 
profile_pic text 
); 

create table post (
id serial primary key, 
title varchar(45), 
img text, 
content text, 
author_id int references users(id)
); 

alter table users 
alter password 
type text 
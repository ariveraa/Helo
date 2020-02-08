select * from post
where title ilike '%' || $1 || '%'; 
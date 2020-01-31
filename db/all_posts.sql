select title, img, content, username,profile_pic
 from post
 join users on post.author_id = users.id;
select title, img, content, users.username,users.profile_pic
 from post
 join users on post.author_id = users.id;
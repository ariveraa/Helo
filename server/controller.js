module.exports ={ 
    getAll: async(req,res) => {
        const db = req.app.get('db')
        let posts = await db.all_posts(); 
        res.status(200).send(posts)
        
    },
    getPost: async(req,res) => { 
        const db = req.app.get('db')
        const{id} = req.params
        
        let [post] = await db.get_post(id); 
        res.status(200).send(post)
        
    }, 
    addPost: async(req,res) => {
        const{title, img, content} =req.body;
        const {id} = req.session.user;
        const db = req.app.get('db'); 

        
        const post = db.add_post([title,img,content,id])
        res.status(200).send(post); 
    },
    searchPosts: async(req,res) => {
        console.log(req.query) 
        const {search} = req.query; 
        const db = req.app.get('db'); 

        const posts = await db.search_posts(search)
        res.status(200).send(posts); 
    }, 
    notIncludeMyPost: async(req,res) => { 
        const db = req.app.get('db')
        const {authorId} = req.session.user.id

        const posts = await db.not_include_my_post(authorId)
        res.status(200).send(posts)
    }   
}

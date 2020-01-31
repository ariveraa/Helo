module.exports ={ 
    getAll: async(req,res) => {
        const db = req.app.get('db')

        let posts = await db.all_posts(); 
    
        res.status(200).send(posts)
        
    },
    addPost: async(req,res) => {
        const{title, img, content} =req.body;
        const {id} = req.session.user; 
        const db = req.app.get('db'); 

        const post = db.add_post([title,img,content,id])
        res.status(200).send(post); 
    },
   
}

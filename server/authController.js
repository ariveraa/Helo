const bcrypt = require('bcryptjs'); 


module.exports ={ 
    register: async(req,res) => {
        const{username, password, profile_pic} = req.body; 
        const db = req.app.get('db'); 

        let user = await db.check_user(username); 
        if(user[0]){ 
            return res.status(400).send('User already exists'); 
        }

        let salt = bcrypt.genSaltSync(10); 
        let hash =bcrypt.hashSync(password, salt); 
        let newUser = await db.register_user(username, hash, profile_pic); 
        req.session.user= newUser[0];

        res.status(201).send(req.session.user); 
    }, 
    login: async(req,res) => {
        const{username, password} = req.body; 
        const db = req.app.get('db'); 

        let user = await db.check_user(username); 
        if(!user[0]){
            return res.status(400).send('Username does not exist'); 
        }
        let authenticated = bcrypt.compareSync(password, user[0].password); 
        if(!authenticated){
            return res.status(401).send('Password is incorrect'); 
        }
        delete user[0].password; 
        req.session.user = user[0]; 
        res.status(202).send(req.session.user); 
    },
    logout: (req,res) =>{ 
        req.session.destroy(); 
        res.sendStatus(200); 
    }, 
    getUser: (req,res) => {
        // async
        // const{id} = req.session.user;
        // const db = req.app.get('db'); 
        if (req.session.user) {
			res.status(200).send(req.session.user);
		} else {
            res.status(200).send('');
           
		}
    
        // let [user] = await db.get_user(id);
        
        // delete user.password; 
        
        // res.status(200).send(user); 
    }
}
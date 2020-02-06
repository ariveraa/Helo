import React,{Component} from 'react'; 

class Post extends Component {
    

    render(){
        return( 
            <div>
                <h2 className = 'post-title'>{this.props.postInfo.title} </h2>
                
            </div>
        )
    }
}

export default Post; 
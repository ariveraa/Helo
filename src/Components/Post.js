import React,{Component} from 'react'; 
import {withRouter} from 'react-router-dom'; 

class Post extends Component {
    

    render(){
        return( 
           
                <div className = 'posts' onClick = {() => this.props.history.push(`/post/${this.props.info.id}`)}>
                    <h2 className = 'post-title'>{this.props.info.title} </h2>
                
                <div id= 'profile'> 
                    <p>{this.props.info.username}</p>
                    <img className = 'posts-pic' src = {this.props.info.profile_pic} alt= 'profile pic'/>
                </div>
            </div>
                    
            
        )
    }
}

export default withRouter(Post); 
import React,{Component} from 'react'; 
import {withRouter} from 'react-router-dom'; 

class Post extends Component {
    

    render(){
        return( 
           
            <div onClick = {() => this.props.history.push(`/post/${this.props.info.id}`)}>
                <h2 className = 'post-title'>{this.props.info.title} </h2>
             
                <img src = {this.props.info.profile_pic} alt= 'profile pic'/>
                <p>{this.props.info.username}</p>
                    
            </div>
        )
    }
}

export default withRouter(Post); 
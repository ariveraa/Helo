import React, {Component} from 'react'; 
import axios from 'axios'; 
import './single.css';


class SinglePost extends Component{ 
    constructor(){ 
        super()
        this.state = { 
            postInfo: []
        }
    }


    componentDidMount(){ 
   axios.get(`/api/post/${+this.props.match.params.id}` ).then(res => this.setState({ 
            postInfo: res.data
         })
         ).catch(err => err.message)
   
        


    }

    render(){ 
        console.log(this.state.postInfo)
        return(  
        <div className = 'single-post'> 
        <div className = 'post-header'>
            <h4>{this.state.postInfo.title}</h4>
            <p id= 'post-username'>{this.state.postInfo.username}</p>
            <img className='posts-pic' src = {this.state.postInfo.profile_pic} alt = 'profile pic'/>
        </div>
            <img id='post-pic' src = {this.state.postInfo.img} alt = 'post pic'/> 
            <p id = 'post-content'>{this.state.postInfo.content}</p>
         

        </div>
        )
    } 

}

export default SinglePost; 
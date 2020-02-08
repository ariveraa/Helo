import React, {Component} from 'react'; 
import axios from 'axios'; 


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
        <div> 
            <h4>{this.state.postInfo.title}</h4>
            <img src = {this.state.postInfo.img} alt = 'post pic'/> 
            <p>{this.state.postInfo.content}</p>
            <p>{this.state.postInfo.username}</p>
            <img src = {this.state.postInfo.profile_pic} alt = 'profile pic'/>

        </div>
        )
    } 

}

export default SinglePost; 
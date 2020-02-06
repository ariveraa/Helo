import React,{Component} from 'react'; 
import {withRouter} from 'react-router-dom'; 
import axios from 'axios'; 
import{connect} from 'react-redux'

class Nav extends Component {

    render(){
        if(this.props.location.pathname === '/'){
            return<></>;
        }
        else{ 
            return( 
                <div className = 'nav-bar'>
                    <img src= {this.props.user.profile_pic} alt= 'profile pic'/>
                    <h2 id= 'username'>{this.props.user.username}</h2>
                    <div onClick = {()=> this.props.history.push('/Dashboard') }>Home </div>
                    <div onClick = {()=> this.props.history.push('/New') }>New Post</div>
                    <button className = 'logout' 
                    onClick ={() =>  axios.post('/auth/logout').then(()=> this.props.history.push('/'))} >Logout</button>
                    
                </div>
            )
        }
    }
}

function mapStateToProps(state){
    return{user:state.reducer.user}
}

export default connect(mapStateToProps)(withRouter(Nav)); 
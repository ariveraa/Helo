import React,{Component} from 'react'; 
import axios from 'axios'; 
import {connect} from 'react-redux'; 
import{getUser} from '../ducks/reducer';

class Auth extends Component {
    constructor(){
        super()
        this.state ={ 
            username: '', 
            password: '',
            loginToggle: true
        }
    }

    toggleLogin = () => {
        this.setState({
            loginToggle: !this.state.loginToggle
        })
    }

    handleChange(event){ 
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
    }
    login = (username, password) => {
        axios.post('/auth/login', {username,password})
        .then(res =>{
            this.props.getUser(res.data.id)
            this.props.history.push('/Dashboard')
        })
    }

    register = (username,password) => { 
        const profile_pic = `https://robohash.org/${username}.png`
        axios.post('/auth/register', {username,password, profile_pic})
        .then(res => {
            this.props.getUser(res.data.id)
            this.props.history.push('/Dashboard')
        })
    }

    render(){
        const {username, password, loginToggle} = this.state; 
        return( 
            <div>
                {loginToggle ? (<button onClick = {this.toggleLogin}>Go to Register</button>): 
                (<button onClick = {this.toggleLogin}>Go to Login</button>)
                }
                <img/>
                <h2>Helo</h2>
                <section className = 'auth-inputs'>
                    <p>Username:</p>
                    <input 
                    name = 'username'
                    placeholder = 'Enter Username'
                    onChange = {event => this.handleChange(event)}
                    value = {username}
                    /> 
                    <p>Password:</p>
                    <input 
                    name = 'password'
                    placeholder = 'Enter password'
                    onChange = {event => this.handleChange(event)}
                    value = {password}
                    />  
                </section>
                {loginToggle ? (<button onClick = {() => this.login(username,password)}>Submit Login</button>) :(<button onClick = {() => this.register(username,password)}>Submit Register</button>)
                }
            </div>
        )
    }
}

function mapStateToProps(state){ 
    return{user:state.reducer.user}
}


export default connect(mapStateToProps,{getUser})(Auth); 
import React,{Component} from 'react'; 
import Post from './Post';
import axios from 'axios'; 
import {connect} from 'react-redux';
import{getPosts, getUser, searchPost,notIncludeMyPost} from '../ducks/reducer'; 
import{withRouter} from 'react-router-dom';

class Dashboard extends Component {
    constructor(){
        super()
        this.state ={ 
            myPost: true, 
            search:'',
        }
    }

    checkbox = () => {
 
        this.setState({
            myPost: !this.state.myPost
        })
    
        
    }

    handleChange = (value) =>{ 
        this.setState({ 
            search: value
        })
    }

    searchPost(){ 
        this.props.searchPost(this.state.search); 

    }

    reset = () =>{ 
        this.setState({ 
         search: ''
        })
        this.props.getPosts();
    }

    notIncludeMyPost(){ 
        if(this.state.myPost){
        this.props.notIncludeMyPost();
        }
        else{
            this.props.getPosts();
        }

    }

    // renderPosts =() => {
    //     if(this.state.search){ 
    //         this.props.searchPost(this.state.search); 
    //     }
    //     else{
    //         this.props.getPosts(); 
    //     }
    // }

    componentDidMount(){
        // this.renderPosts(); 
        this.props.getPosts();
        this.props.getUser();
        console.log(this.props.user)


        // console.log()
        // if(!loggedInUser){ 
        //     this.props.history.push('/')
        // }
    }

    render(){
        console.log(this.state.myPost)
        
        return( 
            <div>
               <section className ='search-bar'>
                   <input placeholder= 'Enter search here' value = {this.state.search} onChange = {event => this.handleChange(event.target.value)} />
                   <button onClick = {() => this.searchPost(this.state.search)}>Search</button>
                   <button onClick = {this.reset}>Reset</button>
                   <p>My Post</p>
                   <input checked = {this.state.myPost} type='checkbox' onChange = {() => {this.checkbox(); this.notIncludeMyPost(); }}/>
               </section>
               <div id = 'posts-container'>
                {this.props.posts.map(element => {
                
                    return (
                        
                        <Post info = {element}
                        key ={element.id} />
                    )
                })}
                </div>

            </div>
        )
    }
}

function mapStateToProps(state){ 
    return{posts:state.reducer.posts,
        user: state.reducer.user
    }
}

export default connect(mapStateToProps,{getPosts, getUser, searchPost,notIncludeMyPost})(Dashboard); 
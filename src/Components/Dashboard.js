import React,{Component} from 'react'; 
import Post from './Post';
import axios from 'axios'; 
import {connect} from 'react-redux';
import{getPosts} from '../ducks/reducer'; 

class Dashboard extends Component {
    constructor(){
        super()
        this.state ={ 
            myPost: true, 
            search:'',
        }
    }

    checkbox(){
        this.setState({
            myPost: !this.state.myPost
        })
    }

    componentDidMount(){
        this.props.getPosts(); 
    }

    render(){
        console.log(this.props)
        return( 
            <div>
               <section className ='search-bar'>
                   <input placeholder= 'Enter search here'/>
                   <button>Search</button>
                   <button>Reset</button>
                   <p>My Post</p>
                   <input value = {this.state.myPost}type='checkbox' onChange = {() => this.checkbox}/>
               </section>
               {this.props.posts.map(element => {
                   return (
                       <Post 
                       key = {element.id}
                       postInfo ={element}
                       />
                   )
               })}


            </div>
        )
    }
}

function mapStateToProps(state){ 
    return{posts:state.reducer.posts}
}

export default connect(mapStateToProps,{getPosts})(Dashboard); 
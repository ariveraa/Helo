import React,{Component} from 'react'; 
import Post from './Post';
import axios from 'axios'; 

class Dashboard extends Component {
    constructor(){
        super()
        this.state ={ 
            myPost: true, 
            search:'',
            posts:[]
        }
    }

    checkbox(){
        this.setState({
            myPost: !this.state.myPost
        })
    }

    componentDidMount(){
        axios.get('/api/posts').then(res => {
            this.setState({
                posts: [res.data]
            })
        })
    }

    render(){
        console.log(this.state.post)
        return( 
            <div>
               <section className ='search-bar'>
                   <input placeholder= 'Enter search here'/>
                   <button>Search</button>
                   <button>Reset</button>
                   <p>My Post</p>
                   <input value = {this.state.myPost}type='checkbox' onChange = {() => this.checkbox}/>
               </section>
            

            </div>
        )
    }
}

export default Dashboard; 
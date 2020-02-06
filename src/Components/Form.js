import React,{Component} from 'react'; 
import axios from 'axios'; 

class Form extends Component {
    constructor(){
        super()
        this.state ={ 
            title: '', 
            img: '', 
            content: ''
        }
    }

    handleChange(event){
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
    }

    addPost(title, img, content){
        axios.post('/api/post', {title, img, content}).then(res => 
            this.props.history.push('/Dashboard'))
    }


    render(){
        const{title,img,content} = this.state
        return( 
            <div>
                <h3>New Post</h3>
                <p>Title:</p>
                <input name = 'title' placeholder = 'enter title' onChange = {event => {this.handleChange(event)}}/>
                {/* <img/> */}
                <p>Image Url:</p>
                <input name = 'img' placeholder= 'Enter URL' onChange = {event => {this.handleChange(event)}}/> 
                <p>content:</p>
                <input name = 'content' placeholder= 'Enter content' onChange = {event => {this.handleChange(event)}}/>
                <button onClick = {() => this.addPost(title,img,content)}>Post</button>
            </div>
        )
    }
}

export default Form; 
// import { switch } from "react-router-dom";
import axios from 'axios'; 
const initialState = { 
    loading:false, 
    user: {
        username: '', 
        id: 0, 
        url: ''
    },
    posts:[]
   
    
}

const GET_USER ='GET_USER'; 
export const getUser = (user) => {
    let loggedInUser = axios.get(`/auth/user`).then(res => res.data).catch(err => err.message)
    return{
        type:GET_USER,
        payload:loggedInUser
    }
}

const GET_POSTS = 'GET_POSTS'; 
export const getPosts = () => { 
    let posts = axios.get('/api/posts').then(res => res.data).catch(err => err.message)
    return{
        type:GET_POSTS, 
        payload:posts
    }
}


export default function(state = initialState, action){
    const {type,payload} = action

    switch(type){
        case GET_USER + '_PENDING':
            return {...state, loading: true};
        case GET_USER + '_FULFILLED':
            return {...state, loading: false, user: payload};
        case GET_USER + '_REJECTED':
            return {...state, loading: false}
        case GET_POSTS + '_PENDING':
            return {...state, loading: true};
        case GET_POSTS + '_FULFILLED':
            return {...state, loading: false, posts: payload};
        case GET_POSTS + '_REJECTED':
            return {...state, loading: false}
      default: 
        return state 
    }
}
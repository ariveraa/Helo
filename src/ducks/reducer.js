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
export const getUser = () => {
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

const SEARCH_POST = 'SEARCH_POST'; 
export const searchPost = (search) =>{ 
    let posts = axios.get(`/api/post/?search=${search}`).then(res => res.data).catch(err => err.message)
    return { 
        type:SEARCH_POST, 
        payload: posts
    }
}

const NOT_INCLUDE_MY_POST = 'NOT_INCLUDE_MY_POST'
    export const notIncludeMyPost = () => { 
        let posts = axios.get(`/api/mypost`).then(res => res.data ).catch(err => err.message)
        console.log(posts)
        return{ 
            type: NOT_INCLUDE_MY_POST,
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

        case SEARCH_POST + '_PENDING':
            return {...state, loading: true};
        case SEARCH_POST + '_FULFILLED':
            return {...state, loading: false, posts: payload};
        case SEARCH_POST + '_REJECTED':
            return {...state, loading: false}

        case NOT_INCLUDE_MY_POST + '_PENDING':
            return {...state, loading: true};
        case NOT_INCLUDE_MY_POST + '_FULFILLED':
            return {...state, loading: false, posts: payload};
        case NOT_INCLUDE_MY_POST + '_REJECTED':
            return {...state, loading: false}

      default: 
        return state 
    }
}
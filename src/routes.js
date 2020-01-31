import React from 'react';
import{Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard'; 
import Form from './Components/Form'; 
import Post from './Components/Post'; 
import Auth from './Components/Auth'; 

export default( 
    <Switch>
        <Route exact path = '/' component = {Auth}/> 
        <Route path = '/dashboard' component ={Dashboard} /> 
        <Route path = '/post/:postid' component ={Post} />
        <Route path = '/new' component = {Form}/> 
    </Switch>
)
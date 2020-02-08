import React from 'react';
import{Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard'; 
import Form from './Components/Form'; 
import SinglePost from './Components/SinglePost'; 
import Auth from './Components/Auth'; 

export default( 
    <Switch>
        <Route exact path = '/' component = {Auth}/> 
        <Route path = '/dashboard' component ={Dashboard} /> 
        <Route path = '/post/:id' component ={SinglePost} />
        <Route path = '/new' component = {Form}/> 
    </Switch>
)
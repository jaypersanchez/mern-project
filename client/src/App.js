import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Post from './components/Post'
import AddPost from './components/AddPost'


function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/posts' component={Post}></Route>
        <Route exact path='/addpost' component={AddPost}></Route>
      </Switch>
    </Router>

  );
}

export default App;

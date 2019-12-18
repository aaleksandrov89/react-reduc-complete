import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'


class  App extends Component {
 
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* matches the first route and stops */}
          {/* if we dont have switch tag it will continue to match */}
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/about' component={ About } />
            <Route path='/contact' component={ Contact } />
            <Route path='/:post_id' component={ Post } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// npm install axios - http requests
// npm install react-router-dom 

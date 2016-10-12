import React from 'react'
import {Route} from 'react-router'
import App from './components/Main.js'
import Home from './components/home.js'
import About from './components/about.js'

export default (
   <Route component={App}>
     <Route path='/' component={Home} />
     <Route path='/about' component={About} />
   </Route>
);

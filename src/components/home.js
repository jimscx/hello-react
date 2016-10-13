require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import SidebarNavigation from './commom/SidebarNavigation';
import Login from './login.js';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="index">
        <SidebarNavigation name='home'/>
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">hello</div>
        <Login name='chenxin'/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
	 
};

export default AppComponent;

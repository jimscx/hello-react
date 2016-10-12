require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Login from './login.js'

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
  	console.log('dasfasfdsaf')
    return (
      <div className="index">
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

require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import SidebarNavigation from './commom/SidebarNavigation'
let yeomanImage = require('../images/yeoman.png');

class About extends React.Component {
  render() {
    return (
      <div className="index">
        <SidebarNavigation name='about'/>
      </div>
    );
  }
}

About.defaultProps = {
	 
};

export default About;

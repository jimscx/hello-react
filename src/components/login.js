require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	age:22
    };
  }
  render() {
    return (
    	<div>
    	   <div className="notice"> my name :{this.props.name}</div>
    	   <div className="notice"> my age :{this.state.age}</div>
      </div>  
    );
  }
}

Login.defaultProps = {

	name: 'doudou'
};
Login.propTypes = {
	name: React.PropTypes.string
};

export default Login;

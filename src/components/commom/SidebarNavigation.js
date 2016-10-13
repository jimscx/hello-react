require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {Link} from 'react-router'

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class SidebarNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <div>
        <AppBar
          title={this.props.name}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap = {this.handleToggle}
        />
        <Drawer width={200} open={this.state.open}>
          <AppBar
            title={this.props.name}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap = {this.handleToggle}
          />
          <MenuItem><Link to='/'>主页</Link></MenuItem>
          <MenuItem><Link to='/about'>关于</Link></MenuItem>
          <MenuItem><Link to='/about'>关于</Link></MenuItem>
          <MenuItem><Link to='/about'>关于</Link></MenuItem>
          <MenuItem><Link to='/about'>关于</Link></MenuItem>
          <MenuItem><Link to='/about'>关于</Link></MenuItem>
          <MenuItem><Link to='/about'>关于</Link></MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

SidebarNavigation.defaultProps = {
    name:'home'
};

export default SidebarNavigation;

require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {Link} from 'react-router'
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

let yeomanImage = require('../../images/yeoman.png');

const recentsIcon = <div className="material-icons" style={{textAlign: "-webkit-center"}}><img src={yeomanImage} alt="Yeoman Generator" style={{margin:0,width:'20px'}}/></div>;
const favoritesIcon = <div className="material-icons" style={{textAlign: "-webkit-center"}}><img src={yeomanImage} alt="Yeoman Generator" style={{margin:0,width:'20px'}}/></div>;

const nearbyIcon = <IconLocationOn />;


class SidebarNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false,
      open: false,
      selectedIndex: 0
    };
  }
  componentDidMount(){
    this.navBarWidth();
  }
  handleToggle = (a) => {
    this.setState({open: !this.state.open})
  }

  select = (index) => this.setState({selectedIndex: index})

  navBarWidth = () => {
    let width = this.refs.navBar.offsetWidth;
    if(width <= 680 ){
      this.setState({mobile: true})
    }
  }
  

  render() {
    return (
      <div ref="navBar">
        <Paper zDepth={1} style={this.state.mobile == true ? {display:'none'} : {}}>
          <BottomNavigation selectedIndex={this.state.selectedIndex} style={{justifyContent:'space-around'}}>
            <BottomNavigationItem
              label="Recents"
              icon={recentsIcon}
              onTouchTap={() => this.select(0)}
            />
            <BottomNavigationItem
              label="Favorites"
              icon={favoritesIcon}
              onTouchTap={() => this.select(1)}
            />
            <BottomNavigationItem
              label="Nearby"
              icon={nearbyIcon}
              onTouchTap={() => this.select(2)}
            />
          </BottomNavigation>
        </Paper>
        <AppBar
          title={this.props.name}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap = {this.handleToggle}
          style={this.state.mobile == false ? {display:'none'} : {}}
          children = {favoritesIcon}
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

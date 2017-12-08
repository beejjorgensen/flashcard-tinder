import React, { Component } from 'react';
import Landing from './Landing';
import FlashPage from './FlashPage';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
import '../App.css';

class Menubar extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    }
    this.toggleVisiblity = this.toggleVisiblity.bind(this);
  }

  toggleVisiblity() {
    this.setState({
      visible: !this.state.visible
    })
  }
  render() {
    const { visible } = this.state;

    return (
      <div className="menu">
        <Button onClick={this.toggleVisiblity} className="menu-button" style={ {padding: 0, margin: '1rem'} }><Image src="/assets/hamburger.png" className="hamburger" /></Button>
        <Sidebar.Pushable>
          <Sidebar 
            as={Menu}
            animation='overlay'
            width='thin' 
            visible={visible}
            icon='labeled'
            vertical
          >
            <Menu.Item href='/'>
              Home
            </Menu.Item>
          </Sidebar>
            <FlashPage />
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default Menubar;
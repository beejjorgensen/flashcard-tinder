import React, { Component } from 'react';
import FlashPage from './FlashPage';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

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
      <div>
        <Button onClick={this.toggleVisiblity}>I'm a hamburger</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar 
            as={Menu}
            animation='overlay'
            width='thin' 
            visible={visible}
            icon='labeled'
            vertical inverted
          >
            <Menu.Item>
              Home
            </Menu.Item>
            <Menu.Item>
              Topics
            </Menu.Item>
            <Menu.Item>
              Settings
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <FlashPage />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default Menubar;
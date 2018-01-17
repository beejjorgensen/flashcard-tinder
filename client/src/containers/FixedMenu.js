import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import '../App.css';
import '../style.css';
import {
  Button,
  Container,
  Icon,
  Menu,
  Modal,
 
} from 'semantic-ui-react'

class FixedMenu extends Component { 
  renderContent() {
    switch (this.props.auth) {

    }
  }
  render() {
    console.log('this.props', this.props);
    return (
      <Menu  inverted fixed='top' size='large'>
        <Container>
        <Menu.Item as='a' href="/">Studdy Buddy</Menu.Item>
          <Menu.Menu position='right'>
          <Menu.Item as='a' href="/">Home</Menu.Item>
            <Menu.Item>
              <Modal trigger={<Button as='a' secondary>LOG IN</Button>} basic>
              <Modal.Header style={ { display: 'flex', justifyContent: 'center' } }>Log In With</Modal.Header>
              <Modal.Content>
                  <Modal.Description>
                  <div className="btn-Signup">
                  <Button.Group className='btn-social' vertical style={ { display: 'flex', justifyContent: 'center' } }>
                    <Button icon labelPosition='left' color='google plus' compact><Icon name='google' /> <a href="/auth/google">GOOGLE+</a></Button>
                    </Button.Group>
                  </div>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}

function mapStateToProps( { auth }) {
  return { auth };
}
export default connect(mapStateToProps)(FixedMenu);


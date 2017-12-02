import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import '../App.css'


class SignInModal extends Component {
  render() {
    return (
      <Modal className="modal" trigger={<Button>Sign In</Button>}>
    <Modal.Header > Ace the Dev Interview! </Modal.Header>
    <Modal.Header > All the study resources you'll ever need, in one place. </Modal.Header>

    <Modal.Content  image>
      <Modal.Description > 
      <Image wrapped size='medium' src='assets/study-buddy.jpg' />
        <Header className="modal">GITHUB</Header>
        <Header >GOOGLE +</Header>
        <Header >FACEBOOK</Header>
        <Header >SIGN UP</Header>
        
      </Modal.Description>
    </Modal.Content>
  </Modal>
    )
  }
}

export default SignInModal;
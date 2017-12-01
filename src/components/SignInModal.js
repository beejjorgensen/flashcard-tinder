import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class SignInModal extends Component {
  render() {
    return (
  <Modal trigger={<Button>Sign In</Button>}>
    <Modal.Header>All the study resources you need to ace the dev interview, in one place.</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='../assets/study-buddy.jpg' />
      <Modal.Description>
        <Header>GITHUB</Header>
        <Header>GOOGLE +</Header>
        <Header>FACEBOOK</Header>
        <Header>SIGN UP</Header>
        
      </Modal.Description>
    </Modal.Content>
  </Modal>
    )
  }
}

export default SignInModal;
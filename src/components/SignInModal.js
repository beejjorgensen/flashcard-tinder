import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const SignInModal = () => (
  <Modal trigger={<Button>Sign In</Button>}>
    <Modal.Header>Hi. Please Sign In so your learning progess can be saved!</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/components/LogIn-Mockup.png' />
      <Modal.Description>
        <Header>GITHUB</Header>
        <Header>GOOGLE +</Header>
        <Header>FACEBOOK</Header>
        <Header>SIGN UP</Header>
        
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default SignInModal;
import React, { Component } from 'react'
import '../App.css';
import Language from '../components/Language';
import SignInModal from '../components/SignInModal';
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
  Visibility,
  Responsive,
  Modal,
} from 'semantic-ui-react'

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as='a' active>Home</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Modal trigger={<Button as='a' primary>Sign Up</Button>} basic>
            <Modal.Header>Ace the Dev Interview!</Modal.Header>
            <Modal.Content>
              <Modal.Description className='signup-button'>
                <Button icon labelPosition='left'><Icon name='github' />GITHUB</Button>
              </Modal.Description>
              <Modal.Description className='signup-button'>
                <Button icon labelPosition='left'><Icon name='google' />GOOGLE +</Button>
              </Modal.Description>
              <Modal.Description className='signup-button'>
                <Button icon labelPosition='left'><Icon name='facebook f' />FACEBOOK</Button>
              </Modal.Description>
              <Modal.Description className='signup-button'>
                <Button icon labelPosition='left'><Icon name='signup' />SIGN UP</Button>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default class HomepageLayout extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible } = this.state

    return (
      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            vertical
            className='top-container'
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item as='a' active>Home</Menu.Item>
                <Menu.Item position='right'>
                <Modal className='modal' trigger={<Button as='a' inverted>Sign Up</Button>}>
            <Modal.Header style={ { display: 'flex', justifyContent: 'center' } }>Ace the Dev Interview!</Modal.Header>
            <Modal.Content>
              <Modal.Description className='signup-button'>
                <Button icon labelPosition='left'><Icon name='github' />GITHUB</Button>
              </Modal.Description>
              <Modal.Description className='signup-button'>
                <Button icon labelPosition='left'><Icon name='google' />GOOGLE +</Button>
              </Modal.Description>
              <Modal.Description className='signup-button'>
                <Button icon labelPosition='left'><Icon name='facebook f' />FACEBOOK</Button>
              </Modal.Description>
              <Modal.Description className='signup-button'>
                <Button icon labelPosition='left'><Icon name='signup' />SIGN UP</Button>
              </Modal.Description>
            </Modal.Content>
          </Modal>
                </Menu.Item>
              </Menu>
            </Container>

            <Container text>
              <Header
                as='h1'
                content='Welcome to Studdy Buddy!'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content='Learn some languages.'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button primary size='huge' href='#languages'>
                Get Started
                <Icon name='right arrow' />
              </Button>
            </Container>
          </Segment>
        </Visibility>
        <a id="languages">
          <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Language />
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment inverted vertical style={{ padding: '5em 0em' }}>
          </Segment>
        </a>
      </div>
    )
  }
}

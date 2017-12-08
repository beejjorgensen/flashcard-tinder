import React, { Component } from 'react'
import '../App.css';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as='a' active>Home</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Button as='a' primary>Sign Up</Button>
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
                  <Button as='a' inverted className='SignupButton'>Sign Up</Button>
                </Menu.Item>
              </Menu>
            </Container>

            <Container text>
              <Header
                as='h1'
                content='Welcome to Studdy Buddy!'
                inverted
                className='main-header'
              />
              <Header
                as='h2'
                content='Do whatever you want when you want to.'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button primary size='huge'>
                Get Started
                <Icon name='right arrow' />
              </Button>
            </Container>
          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}></Header>
                <p style={{ fontSize: '1.33em' }}>

                </p>
                <Header as='h3' style={{ fontSize: '2em' }}></Header>
                <p style={{ fontSize: '1.33em' }}>
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'></Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}></Header>
                <p style={{ fontSize: '1.33em' }}></p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}></Header>
                <p style={{ fontSize: '1.33em' }}>
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}></Header>
            <p style={{ fontSize: '1.33em' }}>
            </p>
            <Button as='a' size='large'></Button>
            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href='#'></a>
            </Divider>
            <Header as='h3' style={{ fontSize: '2em' }}></Header>
            <p style={{ fontSize: '1.33em' }}>
            </p>
            <Button as='a' size='large'></Button>
          </Container>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'></List.Item>
                    <List.Item as='a'></List.Item>
                    <List.Item as='a'></List.Item>
                    <List.Item as='a'></List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='' />
                  <List link inverted>
                    <List.Item as='a'></List.Item>
                    <List.Item as='a'></List.Item>
                    <List.Item as='a'></List.Item>
                    <List.Item as='a'></List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted></Header>
                  <p></p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Divider, Image } from 'semantic-ui-react'
import '../App.css'

class Language extends Component {
    render() {
        return (
            <div>
            <div className="lang-header"> <h1> Choose a language and start learning now! </h1> </div>

    <div className="topic-container">
    <Image.Group size='small'>
      <a className='btnTopic' href="/javascript"><Image src='/assets/javascript_icon.png' className='topics' /></a>
      <Image src='/assets/python_icon.png' className='topics' />
      <Image src='/assets/html-5_icon.png' className='topics' />
      <Image src='/assets/css3_icon.png' className='topics' />
    </Image.Group>
    <Divider hidden />

    <Image.Group size='small'>
      <a className='btnTopic' href="/javascript"><Image src='/assets/javascript_icon.png' className='topics' /></a>
      <Image src='/assets/python_icon.png' className='topics' />
      <Image src='/assets/html-5_icon.png' className='topics' />
      <Image src='/assets/css3_icon.png' className='topics' />
    </Image.Group>
    <Divider hidden />

  </div>
  </div>
        );
    }
}
export default Language
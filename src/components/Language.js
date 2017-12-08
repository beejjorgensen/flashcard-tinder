import React, { Component } from 'react'
import { Divider, Image } from 'semantic-ui-react'
import '../App.css'

class Language extends Component {
    render() {
        return (
            <div>

    <div className="topic-container">
    <Image.Group size='small'>
      <a className='btnTopic' href="/javascript"><Image src='/assets/javascript.png' className='topics' /></a>
      <Image src='/assets/python.png' className='topics' />
      <Image src='/assets/html-5.png' className='topics' />
      <Image src='/assets/css3.png' className='topics' />
    </Image.Group>
    <Divider hidden />

  </div>
  </div>
        );
    }
}
export default Language
import React, { Component } from 'react'
import { Divider, Image } from 'semantic-ui-react'
import '../App.css';

class JavaScript extends Component {
   render() {
        return (
        <div>
          <div className="topic-container">
            <Image.Group size='small'>
               <Image src='/assets/javascript.png'/>
            </Image.Group>
            <Divider hidden />
          </div>

          <div className="topic-container">
            <h1 className="cat-header">JavaScript Study</h1> 
          </div>
          <ul className="topic-container links">
             <a href="#"><li>Overview</li></a>
             <a href="#"><li>Basic Concepts</li></a>
             <a href="#"><li>Conditions and Loops</li></a>
             <a href="#"><li>Functions</li></a>
             <a href="#"><li>Data Structures</li></a>
             <a href="#"><li>Objects</li></a>
             <a href="#"><li>DOM & Events</li></a>
             <a href="#"><li>Clousers</li></a>
             <a href="#"><li>ES6</li></a>
             <a href="#"><li>Syntax</li></a>
             <a href="#"><li>Apply, Call & Bind</li></a>
             <a href="#"><li>Scope</li></a>
          </ul>
        </div>
        );
    }
}
export default JavaScript
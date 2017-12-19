import React, { Component } from 'react'
import { Divider, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import '../App.css';

class JavaScript extends Component {
   render() {
        return (
        <div>
          <div className="category-icon">
            <Image.Group size='small'>
               <Image src='/assets/javascript_icon.png'/>
            </Image.Group>
            <Divider hidden />
          </div>

          <div className="category">
            <h1 className="category-header">JavaScript Study</h1> 
          </div>
          <ul className="category-list">
             <a href="/flashpage"><li>Overview</li></a>
             <a href="/flashpage"><li>Basic Concepts</li></a>
             <a href="/flashpage"><li>Conditions and Loops</li></a>
             <a href=""><li>Functions</li></a>
             <a href=""><li>Data Structures</li></a>
             <a href=""><li>Objects</li></a>
             <a href=""><li>DOM & Events</li></a>
             <a href=""><li>Clousers</li></a>
             <a href=""><li>ES6</li></a>
             <a href=""><li>Syntax</li></a>
             <a href=""><li>Apply, Call & Bind</li></a>
             <a href=""><li>Scope</li></a>
          </ul>
          <div className="btn-back" >
             <Link to="/"><img src="/assets/back-button.png" className="btn-back" alt="back button"/></Link>
          </div>
        </div>
        );
    }
}
export default JavaScript
import React from 'react';
import { Link } from 'react-router-dom';
import Client from '../Client.js';


class Test extends React.Component {
  
  state = {
    cards: [],
  };
  
    Client.cardRender();
  


    
    render() {
      const { cards } = this.state;
    return (
      <div>
        {this.state.cards}       
      </div>
    );
  }
};

export default Test;

  // const divStyle = {
  //   fontSize: '15px',
  //   backgroundColor: 'teal',
  //   textAlign: 'center',
  //   margin: '400',
  //   padding: '300',
  //   border: '50px solid pink',
  //   borderRadius: '100%'
  // }
  // render() {
  //   return (
  //       <div style={divStyle}>
  //         <Link to="/"           >*   HOME   *  </Link>
  //         <Link to="/auth/login" >    LOGIN  *  </Link>
  //         <Link to="/logout"     >   LOGOUT  *  </Link>
  //         <Link to="/profile/"   >  PROFILE  *  </Link>
          
  //         <div>
  //           <a href="http://localhost:3001/login">LOGIN HARDCODED PATH</a>
  //         </div>
  
  //       </div>
  //   );
  // }
  
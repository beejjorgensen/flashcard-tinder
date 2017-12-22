import React from 'react';
import { Link } from 'react-router-dom';
// import Client from '../Client.js';

  const divStyle = {
    fontSize: '15px',
    backgroundColor: 'teal',
    textAlign: 'center',
    margin: '400',
    padding: '300',
    border: '50px solid pink',
    borderRadius: '100%'
  }

class Test extends React.Component {
  
    render() {
      return (
          <div style={divStyle}>
            <Link to="/"           >*   HOME   *  </Link>
            <Link to="/auth/login" >    LOGIN  *  </Link>
            <Link to="/auth/google"     >   GOOGLE  *  </Link>
            <Link to="/profile/"   >  PROFILE  *  </Link>
            
            <div>
              <a href="/auth/login">LOGIN HREF PATH</a>
            </div>
            <div>
              <a href="/auth/google">GOOGLE HREF PATH</a>
            </div>
    
          </div>
      );
    }
  }

export default Test;

  
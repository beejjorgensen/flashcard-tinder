import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import '../App.css';

class Landing extends Component {

  render() {
    return (
      <div>
        <Grid>
          <div className="header">
            Studdy Buddy!
          </div>
        </Grid>
      </div>
    )
  }
}
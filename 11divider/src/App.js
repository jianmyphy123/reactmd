import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {Menu, MenuItem} from 'material-ui/Menu';


const style = {
  marginLeft: 20,
};

const style2 = {
  // Without this, the menu overflows the CodeExample container.
  float: 'left',
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Paper zDepth={2}>
           <TextField hintText="First name" style={style} underlineShow={false} />
           <Divider />
           <TextField hintText="Middle name" style={style} underlineShow={false} />
           <Divider />
           <TextField hintText="Last name" style={style} underlineShow={false} />
           <Divider />
           <TextField hintText="Email address" style={style} underlineShow={false} />
           <Divider />
         </Paper>

         <Menu desktop={true} style={style2}>
          <MenuItem primaryText="Settings" />
          <MenuItem primaryText="Help & feedback" />
          <Divider />
          <MenuItem primaryText="Sign out" />
        </Menu>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

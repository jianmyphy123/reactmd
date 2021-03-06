import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import FontIcon from 'material-ui/FontIcon';
import FileFolder from 'material-ui/svg-icons/file/folder';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5};



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <List>
          <ListItem
            disabled={true}
            leftAvatar={
              <Avatar src="/images/uxceo-128.jpg" />
            }
          >
            Image Avatar
          </ListItem>
          <ListItem
            disabled={true}
            leftAvatar={
              <Avatar
                src="images/uxceo-128.jpg"
                size={30}
                style={style}
              />
            }
          >
            Image Avatar with custom size
          </ListItem>

          <ListItem
            disabled={true}
            leftAvatar={
              <Avatar icon={<FontIcon className="material-icons">voicemail</FontIcon>} />
            }
          >
            FontIcon Avatar
          </ListItem>
          <ListItem
            disabled={true}
            leftAvatar={
              <Avatar
                icon={<i className="material-icons">voicemail</i>}
                color={blue300}
                backgroundColor={indigo900}
                size={30}
                style={style}
              />
            }
          >
            FontIcon Avatar with custom colors and size
          </ListItem>
          <ListItem
            disabled={true}
            leftAvatar={
              <Avatar icon={<FileFolder />} />
            }
          >
            SvgIcon Avatar
          </ListItem>
          <ListItem
            disabled={true}
            leftAvatar={
              <Avatar
                icon={<FileFolder />}
                color={orange200}
                backgroundColor={pink400}
                size={30}
                style={style}
              />
            }
          >
            SvgIcon Avatar with custom colors and size
          </ListItem>
          <ListItem
            disabled={true}
            leftAvatar={<Avatar>A</Avatar>}
          >
            Letter Avatar
          </ListItem>
          <ListItem
            disabled={true}
            leftAvatar={
              <Avatar
                color={deepOrange300}
                backgroundColor={purple500}
                size={30}
                style={style}
              >
                A
              </Avatar>
            }
          >
            Letter Avatar with custom colors and size
          </ListItem>
        </List>
      </MuiThemeProvider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {fullWhite} from 'material-ui/styles/colors';
import ActionHome from 'material-ui/svg-icons/action/home';

const styles = {
  uploadButton: {
    verticalAlign: 'middle',
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  smallIcon: {
    width: 36,
    height: 36,
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
};

const style = {
  margin: 12,
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <FlatButton label="Default" />
          <FlatButton label="Primary" primary={true} />
          <FlatButton label="Secondary" secondary={true} />
          <FlatButton label="Disabled" disabled={true} />
          <br />
          <br />
          <FlatButton label="Full width" fullWidth={true} />
          <br />
          <FlatButton
            label="Choose an Image"
            labelPosition="before"
            style={styles.uploadButton}
            containerElement="label"
          >
            <input type="file" style={styles.uploadInput} />
          </FlatButton>
          <FlatButton
            label="Label before"
            labelPosition="before"
            primary={true}
            icon={<ActionAndroid />}
          />
          <FlatButton
            href="https://github.com/callemall/material-ui"
            target="_blank"
            label="GitHub Link"
            secondary={true}
            icon={<i className="fa fa-github" aria-hidden="true"></i>}
          />
          <br />
          <FlatButton
            icon={<ActionAndroid />}
            style={style}
          />
          <FlatButton
            backgroundColor="#a4c639"
            hoverColor="#8AA62F"
            icon={<ActionAndroid color={fullWhite} />}
            style={style}
          />
          <FlatButton
            href="https://github.com/callemall/material-ui"
            target="_blank"
            secondary={true}
            icon={<i className="fa fa-github" aria-hidden="true"></i>}
            style={style}
          />

          <div>
            <RaisedButton label="Default" style={style} />
            <RaisedButton label="Primary" primary={true} style={style} />
            <RaisedButton label="Secondary" secondary={true} style={style} />
            <RaisedButton label="Disabled" disabled={true} style={style} />
            <br />
            <br />
            <RaisedButton label="Full width" fullWidth={true} />
          </div>
          <br />
          <div>
            <RaisedButton
              label="Choose an Image"
              labelPosition="before"
              style={style}
              containerElement="label"
            >
              <input type="file" style={styles.uploadInput} />
            </RaisedButton>
            <RaisedButton
              label="Label before"
              labelPosition="before"
              primary={true}
              icon={<ActionAndroid />}
              style={style}
            />
            <RaisedButton
              href="https://github.com/callemall/material-ui"
              target="_blank"
              label="Github Link"
              secondary={true}
              style={style}
              icon={<i className="fa fa-github" aria-hidden="true"></i>}
            />
          </div>

          <div>
            <RaisedButton
              icon={<ActionAndroid />}
              style={style}
            />
            <RaisedButton
              backgroundColor="#a4c639"
              icon={<ActionAndroid color={fullWhite} />}
              style={style}
            />
            <RaisedButton
              href="https://github.com/callemall/material-ui"
              target="_blank"
              secondary={true}
              icon={<i className="fa fa-github" aria-hidden="true"></i>}
              style={style}
            />
          </div>
          <div>
            <FloatingActionButton style={style}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton mini={true} style={style}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton secondary={true} style={style}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton mini={true} secondary={true} style={style}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton disabled={true} style={style}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton mini={true} disabled={true} style={style}>
              <ContentAdd />
            </FloatingActionButton>
          </div>
          <div>
            <IconButton iconClassName="fa fa-github" />
            <IconButton iconClassName="fa fa-github" disabled={true} />
          </div>
          <div>
            <IconButton tooltip="Font Icon">
              <FontIcon className="material-icons" >home</FontIcon>
            </IconButton>

            <IconButton tooltip="SVG Icon">
              <ActionHome />
            </IconButton>

            <IconButton
              iconClassName="material-icons"
              tooltip="Ligature"
            >
              home
            </IconButton>
          </div>
          <div>
            <IconButton>
              <ActionHome />
            </IconButton>

            <IconButton
              iconStyle={styles.smallIcon}
              style={styles.small}
            >
              <ActionHome />
            </IconButton>

            <IconButton
              iconStyle={styles.mediumIcon}
              style={styles.medium}
            >
              <ActionHome />
            </IconButton>

            <IconButton
              iconStyle={styles.largeIcon}
              style={styles.large}
            >
              <ActionHome />
            </IconButton>
          </div>

          <div>
            <IconButton
              iconClassName="fa fa-github" tooltip="bottom-right"
              tooltipPosition="bottom-right"
            />
            <IconButton
              iconClassName="fa fa-github" tooltip="bottom-center"
              tooltipPosition="bottom-center"
            />
            <IconButton
              iconClassName="fa fa-github" tooltip="bottom-left"
              tooltipPosition="bottom-left"
            />
            <IconButton
              iconClassName="fa fa-github" tooltip="top-right"
              tooltipPosition="top-right"
            />
            <IconButton
              iconClassName="fa fa-github" tooltip="top-center"
              tooltipPosition="top-center"
            />
            <IconButton
              iconClassName="fa fa-github" tooltip="top-left"
              tooltipPosition="top-left"
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

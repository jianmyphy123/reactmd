import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

const styles = {
  radioButton: {
    marginTop: 16,
  },
};


class App extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    const radios = [];
    for (let i = 0; i < 30; i++) {
      radios.push(
        <RadioButton
          key={i}
          value={`value${i + 1}`}
          label={`Option ${i + 1}`}
          style={styles.radioButton}
        />
      );
    }

    return (
      <MuiThemeProvider>
        <div>
          <div>
            <RaisedButton label="Dialog" onClick={this.handleOpen} />
            <Dialog
              title="Dialog With Actions"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              The actions in this window were passed in as an array of React objects.
            </Dialog>
          </div>
          <br/>
          <div>
            <RaisedButton label="Modal Dialog" onClick={this.handleOpen} />
            <Dialog
              title="Dialog With Actions"
              actions={actions}
              modal={true}
              open={this.state.open}
            >
              Only actions can close this dialog.
            </Dialog>
          </div>
          <br/>
          <div>
            <RaisedButton label="Dialog With Custom Width" onClick={this.handleOpen} />
            <Dialog
              title="Dialog With Custom Width"
              actions={actions}
              modal={true}
              contentStyle={customContentStyle}
              open={this.state.open}
            >
              This dialog spans the entire width of the screen.
            </Dialog>
          </div>
          <br />
          <div>
            <RaisedButton label="Dialog With Date Picker" onClick={this.handleOpen} />
            <Dialog
              title="Dialog With Date Picker"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              Open a Date Picker dialog from within a dialog.
              <DatePicker hintText="Date Picker" />
            </Dialog>
          </div>
          <br />
          <div>
            <RaisedButton label="Scrollable Dialog" onClick={this.handleOpen} />
            <Dialog
              title="Scrollable Dialog"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
              autoScrollBodyContent={true}
            >
              <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                {radios}
              </RadioButtonGroup>
            </Dialog>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

function handleRequestDelete() {
  alert('You clicked the delete button.');
}

function handleTouchTap() {
  alert('You clicked the Chip.');
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {chipData: [
      {key: 0, label: 'Angular'},
      {key: 1, label: 'JQuery'},
      {key: 2, label: 'Polymer'},
      {key: 3, label: 'ReactJS'},
    ]};
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  }

  handleRequestDelete = (key) => {
    if (key === 3) {
      alert('Why would you want to delete React?! :)');
      return;
    }

    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  };

  renderChip(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    );
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={styles.wrapper}>

          <Chip
            style={styles.chip}
          >
            Text Chip
          </Chip>

          <Chip
            onRequestDelete={handleRequestDelete}
            onClick={handleTouchTap}
            style={styles.chip}
          >
            Deletable Text Chip
          </Chip>

          <Chip
            onClick={handleTouchTap}
            style={styles.chip}
          >
            <Avatar src="uxceo-128.jpg" />
            Image Avatar Chip
          </Chip>

          <Chip
            onRequestDelete={handleRequestDelete}
            onClick={handleTouchTap}
            style={styles.chip}
          >
            <Avatar src="ok-128.jpg" />
            Deletable Avatar Chip
          </Chip>

          <Chip
            onClick={handleTouchTap}
            style={styles.chip}
          >
            <Avatar icon={<FontIcon className="material-icons">perm_identity</FontIcon>} />
            FontIcon Avatar Chip
          </Chip>

          <Chip
            onRequestDelete={handleRequestDelete}
            onClick={handleTouchTap}
            style={styles.chip}
          >
            <Avatar color="#444" icon={<SvgIconFace />} />
            SvgIcon Avatar Chip
          </Chip>

          <Chip onClick={handleTouchTap} style={styles.chip}>
            <Avatar size={32}>A</Avatar>
            Text Avatar Chip
          </Chip>

          <Chip
            backgroundColor={blue300}
            onRequestDelete={handleRequestDelete}
            onClick={handleTouchTap}
            style={styles.chip}
          >
            <Avatar size={32} color={blue300} backgroundColor={indigo900}>
              MB
            </Avatar>
            Colored Chip
          </Chip>

          <div style={this.styles.wrapper}>
            {this.state.chipData.map(this.renderChip, this)}
          </div>
        </div>

      </MuiThemeProvider>
    );
  }
}

export default App;

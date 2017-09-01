import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

const dataSource1 = [
  {
    text: 'text-value1',
    value: (
      <MenuItem
        primaryText="text-value1"
        secondaryText="&#9786;"
      />
    ),
  },
  {
    text: 'text-value2',
    value: (
      <MenuItem
        primaryText="text-value2"
        secondaryText="&#9786;"
      />
    ),
  },
];
const dataSource2 = ['12345', '23456', '34567'];
const dataSource3 = [
  {textKey: 'Some Text', valueKey: 'someFirstValue'},
  {textKey: 'Some Text', valueKey: 'someSecondValue'},
];
const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};

const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
];

const fruit = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
  'Boysenberry', 'Blood Orange',
  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
  'Coconut', 'Cranberry', 'Clementine',
  'Damson', 'Date', 'Dragonfruit', 'Durian',
  'Elderberry',
  'Feijoa', 'Fig',
  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
  'Honeydew', 'Huckleberry',
  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
  'Kiwi fruit', 'Kumquat',
  'Lemon', 'Lime', 'Loquat', 'Lychee',
  'Nectarine',
  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
  'Olive', 'Orange',
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
  'Quince',
  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
  'Ugli fruit',
  'Watermelon',
];

class App extends Component {

  state = {
    dataSource: [],
    searchText: '',
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  handleUpdateInput2 = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  };

  handleNewRequest2 = () => {
    this.setState({
      searchText: '',
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div style={{margin: 20}}>
          <AutoComplete
            hintText="Type anything"
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
          />
          <AutoComplete
            hintText="Type anything"
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
            floatingLabelText="Full width"
            fullWidth={true}
          />
          <AutoComplete
            hintText="text-value data"
            filter={AutoComplete.noFilter}
            dataSource={dataSource1}
          /><br />
          <br />
          <AutoComplete
            floatingLabelText="showAllItems"
            filter={AutoComplete.noFilter}
            openOnFocus={true}
            dataSource={dataSource2}
          /><br />
          <AutoComplete
            floatingLabelText="Same text, different values"
            filter={AutoComplete.noFilter}
            openOnFocus={true}
            dataSource={dataSource3}
            dataSourceConfig={dataSourceConfig}
          /><br />
          <AutoComplete
            floatingLabelText="Type 'r', case insensitive"
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={colors}
          /><br />
          <AutoComplete
            floatingLabelText="Type 'peah', fuzzy search"
            filter={AutoComplete.fuzzyFilter}
            dataSource={fruit}
            maxSearchResults={5}
          /><br />
          <AutoComplete
            hintText="Type 'r', case insensitive"
            searchText={this.state.searchText}
            onUpdateInput={this.handleUpdateInput2}
            onNewRequest={this.handleNewRequest2}
            dataSource={colors}
            filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
            openOnFocus={true}
          />
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;

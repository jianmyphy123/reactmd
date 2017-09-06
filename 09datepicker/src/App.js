import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';
import areIntlLocalesSupported from 'intl-locales-supported';
import persianUtils from 'material-ui-persian-date-picker-utils';


let DateTimeFormat;

/**
 * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 */
if (areIntlLocalesSupported(['fr', 'fa-IR'])) {
  DateTimeFormat = global.Intl.DateTimeFormat;
} else {
  const IntlPolyfill = require('intl');
  DateTimeFormat = IntlPolyfill.DateTimeFormat;
  require('intl/locale-data/jsonp/fr');
  require('intl/locale-data/jsonp/fa-IR');
}

const optionsStyle = {
  maxWidth: 255,
  marginRight: 'auto',
};

function disableWeekends(date) {
  return date.getDay() === 0 || date.getDay() === 6;
}

function disableRandomDates() {
  return Math.random() > 0.7;
}

class App extends Component {

  constructor(props) {
    super(props);

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);

    this.state = {
      minDate: minDate,
      maxDate: maxDate,
      autoOk: false,
      disableYearSelection: false,
    };
  }

  handleChangeMinDate = (event, date) => {
    this.setState({
      minDate: date,
    });
  };

  handleChangeMaxDate = (event, date) => {
    this.setState({
      maxDate: date,
    });
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div>
            <DatePicker hintText="Portrait Dialog" />
            <DatePicker hintText="Landscape Dialog" mode="landscape" />
            <DatePicker hintText="Dialog Disabled" disabled={true} />
            <DatePicker hintText="Open to Year" openToYearSelection={true} />
          </div>
          <div>
            <DatePicker hintText="Portrait Inline Dialog" container="inline" />
            <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />
          </div>


          <div>
            <DatePicker
              floatingLabelText="Ranged Date Picker"
              autoOk={this.state.autoOk}
              minDate={this.state.minDate}
              maxDate={this.state.maxDate}
              disableYearSelection={this.state.disableYearSelection}
            />
            <div style={optionsStyle}>
              <DatePicker
                onChange={this.handleChangeMinDate}
                autoOk={this.state.autoOk}
                floatingLabelText="Min Date"
                defaultDate={this.state.minDate}
                disableYearSelection={this.state.disableYearSelection}
              />
              <DatePicker
                onChange={this.handleChangeMaxDate}
                autoOk={this.state.autoOk}
                floatingLabelText="Max Date"
                defaultDate={this.state.maxDate}
                disableYearSelection={this.state.disableYearSelection}
              />
              <Toggle
                name="autoOk"
                value="autoOk"
                label="Auto Ok"
                toggled={this.state.autoOk}
                onToggle={this.handleToggle}
              />
              <Toggle
                name="disableYearSelection"
                value="disableYearSelection"
                label="Disable Year Selection"
                toggled={this.state.disableYearSelection}
                onToggle={this.handleToggle}
              />
            </div>
            <div>
              <DatePicker hintText="Weekends Disabled" shouldDisableDate={disableWeekends} />
              <DatePicker hintText="Random Dates Disabled" shouldDisableDate={disableRandomDates} />
            </div>

            <div>
              <DatePicker
                hintText="fr locale"
                DateTimeFormat={DateTimeFormat}
                okLabel="OK"
                cancelLabel="Annuler"
                locale="fr"
              />
              <DatePicker
                hintText="fa-IR locale"
                DateTimeFormat={DateTimeFormat}
                okLabel="تایید"
                cancelLabel="لغو"
                locale="fa-IR"
                firstDayOfWeek={6}
                utils={persianUtils}
              />
              <DatePicker
                hintText="en-US locale"
                locale="en-US"
                firstDayOfWeek={0}
              />
              <DatePicker
                hintText="Custom date format"
                firstDayOfWeek={0}
                formatDate={new DateTimeFormat('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                }).format}
              />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

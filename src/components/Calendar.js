import React, { Component } from 'react';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment(new Date()),
      endDate: null,
      focusedInput: null
    }
  }

  onDatesChange({startDate, endDate}) {
    this.setState({ startDate, endDate });
  }

  render() {
    return (
      <div style={{left: this.props.xPos, top: this.props.yPos }} className="calendar">
        <DateRangePicker
          style={{marginLeft: -100}}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          focusedInput={this.state.focusedInput}
          onDatesChange={this.onDatesChange.bind(this)}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput }); }}
        /> 
      </div>
    )

  }
}

export default Calendar;
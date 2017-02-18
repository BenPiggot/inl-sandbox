import React, { Component } from 'react';
import Calendar from './Calendar';

class HoursText extends Component {
  render() {
    return (
      <div className="hours-text">
        <div className="hours-number">{this.props.hours}</div>
        <div className="time-description-text">{this.props.text}</div>
      </div>
    )
  }
}

export default HoursText; 
import React, { Component } from 'react';
import Calendar from './Calendar';

class HoursText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCalendar: false
    }
  }

  handleMouseEnter(e) {
    this.setState({ showCalendar: true })
  }

  handleMouseLeave(e) {
    this.setState({ showCalendar: false })
  }

  render() {
    return (
      <div className="hours-text" 
          onMouseEnter={this.handleMouseEnter.bind(this)}
          onMouseLeave={this.handleMouseLeave.bind(this)}>
        <div className="hours-number">{this.props.hours}</div>
        <div className="time-description-text">{this.props.text}</div>
        { this.state.showCalendar ? <Calendar xPos={this.props.xPos} /> : null }
      </div>
    )
  }
}

export default HoursText; 
import React, { Component } from 'react';
import Calendar from './Calendar';

class BilledHoursText extends Component {
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
      <div className="footer-text" 
          onMouseEnter={this.handleMouseEnter.bind(this)}
          onMouseLeave={this.handleMouseLeave.bind(this)}>
        Billed Hours: 16
        { this.state.showCalendar ? <Calendar xPos={this.props.xPos} /> : null }
      </div>
    )
  }
}

export default BilledHoursText; 
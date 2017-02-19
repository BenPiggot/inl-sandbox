import React, { Component } from 'react';
import CalendarControl from '../components/CalendarControl';
import ScheduleControl from '../components/ScheduleControl';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <CalendarControl />
        <ScheduleControl />
      </div>
    )
  }
}

export default Header;
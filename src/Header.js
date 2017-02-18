import React, { Component } from 'react';
import CalendarControl from './CalendarControl';
import ScheduleControl from './ScheduleControl';

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
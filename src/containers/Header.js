import React, { Component } from 'react';
import CalendarControl from '../components/CalendarControl';
import ScheduleControl from '../components/ScheduleControl';
import PrintButton from '../components/PrintButton';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <CalendarControl />
        <ScheduleControl />
        <PrintButton />
      </div>
    )
  }
}

export default Header;
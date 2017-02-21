import React, { Component } from 'react';
import CalendarControl from '../components/CalendarControl';
import ScheduleControl from '../components/ScheduleControl';
import PrintButton from '../components/PrintButton';
import CloneScheduleButton from '../components/CloneScheduleButton';
import AddRowButton from '../components/AddRowButton';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <CalendarControl />
        <ScheduleControl />
        <AddRowButton float="right" />
        <CloneScheduleButton float="right"/>
        <PrintButton float="right"/>
      </div>
    )
  }
}

export default Header;
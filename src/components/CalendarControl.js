import React, { Component } from 'react';
import moment from 'moment';
import Calendar from './Calendar';

class CalendarControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftDate: new Date(),
      rightDate: new Date((new Date()).getTime() + 6 * 86400000),
      showCalendar: false
    }
  }

  goBack() {
    const newLeftDate = new Date(this.state.leftDate.getTime() - 7 * 86400000);
    const newRightDate = new Date(this.state.rightDate.getTime() - 7 * 86400000);
    this.setState({ leftDate: newLeftDate, rightDate: newRightDate });
  }

  goForward() {
    const newLeftDate = new Date(this.state.leftDate.getTime() + 7 * 86400000);
    const newRightDate = new Date(this.state.rightDate.getTime() + 7 * 86400000);
    this.setState({ leftDate: newLeftDate, rightDate: newRightDate });
  }

  showCalendar() {  
    this.setState( {showCalendar: !this.state.showCalendar })
  }

  render() {
    return (
      <div className="header-control">
        <button className="header-control-left" onClick={this.goBack.bind(this)}>
          <i className="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
        </button>
        <div onClick={this.showCalendar.bind(this)} className="header-control-text">{moment(this.state.leftDate).format('MM/DD')} - {moment(this.state.rightDate).format('MM/DD')}</div>
        <button className="header-control-right" onClick={this.goForward.bind(this)}>
          <i className="fa fa-chevron-right fa-2x" aria-hidden="true"></i>
        </button>
        { this.state.showCalendar ? <Calendar xPos={60} yPos={70}/> : null }
      </div>
    )
  }
}

export default CalendarControl;
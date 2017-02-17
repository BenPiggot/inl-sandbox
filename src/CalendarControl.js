import React, { Component } from 'react';
import moment from 'moment';

class CalendarControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftDate: new Date(),
      rightDate: new Date((new Date()).getTime() + 6 * 86400000)
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

  render() {
    return (
      <div className="header-control">
        <button className="header-control-left" onClick={this.goBack.bind(this)}>
          <i className="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
        </button>
        <div className="header-control-text">{moment(this.state.leftDate).format('MM/DD')} - {moment(this.state.rightDate).format('MM/DD')}</div>
        <button className="header-control-right" onClick={this.goForward.bind(this)}>
          <i className="fa fa-chevron-right fa-2x" aria-hidden="true"></i>
        </button>
      </div>
    )
  }
}

export default CalendarControl;
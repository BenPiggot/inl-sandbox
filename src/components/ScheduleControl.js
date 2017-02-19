import React, { Component } from 'react';

class ScheduleControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scheduleType: 'Monday Sunday',
      showTypes: false
    }
  }

  handleClick() {
    this.setState({ showTypes: !this.state.showTypes})
  }

  render() {
    return (
      <div className="header-control">
        <div className="header-control-container">
          <div className="header-select-preface">Schedule Type</div>
          <label>
            <select className="header-select">
              <option value={this.state.scheduleType}>{this.state.scheduleType}</option>
              <option value={this.state.scheduleType}>{this.state.scheduleType}</option>
            </select>
          </label>
        </div>
      </div>
    )
  }
}

export default ScheduleControl;
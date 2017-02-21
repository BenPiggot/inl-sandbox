import React from 'react';

const CloneScheduleButton = (props) => {
  return (
    <div style={{float: props.float}} className="header-control header-control-simple">
      <i className="fa fa-sign-in fa-2x"></i>
      <span>Clone Last Week</span>
    </div>
  )
}

export default CloneScheduleButton;
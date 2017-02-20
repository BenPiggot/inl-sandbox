import React, { Component } from 'react';

class SidebarControls extends Component {
  render() {
    return (
      <div className="sidebar-controls">
        <div className="sidebar-icon">
          <i className="fa fa-clock-o fa-2x"></i>
        </div>
        <div className="sidebar-icon">
          <i className="fa fa-check fa-2x"></i>
        </div>
        <div className="sidebar-icon">
          <i className="fa fa-bar-chart fa-2x"></i>
        </div>
        <div className="sidebar-icon">
          <i className="fa fa-share fa-2x"></i>
        </div>
        <div className="sidebar-icon">
          <i className="fa fa-cog fa-2x"></i>
        </div>
        <div className="sidebar-icon-user">
          <div className="sidebar-user-alerts">2</div>
          <i className="fa fa-user fa-2x"></i>
        </div>
      </div>
    )
  }
}

export default SidebarControls;
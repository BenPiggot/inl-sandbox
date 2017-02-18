import React, { Component } from 'react';
import HoursText from './HoursText';
import FlexTimeWidget from './FlexTimeWidget';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <HoursText xPos={-50} text="Billed Hours" hours={16}/>
        <HoursText xPos={100} text="Hours Time Off" hours={8}/>
        <FlexTimeWidget />
      </div>
    )
  }
}

export default Footer;
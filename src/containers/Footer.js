import React, { Component } from 'react';
import HoursText from '../components/HoursText';
import FlexTimeWidget from '../components/FlexTimeWidget';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <HoursText xPos={-50} text="Billed Hours" hours={16}/>
        <HoursText xPos={100} text="Hours Time Off" hours={8}/>
        <HoursText xPos={250} text="Total Hours" hours={24}/>
        <FlexTimeWidget />
      </div>
    )
  }
}

export default Footer;
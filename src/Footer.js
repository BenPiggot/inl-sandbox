import React, { Component } from 'react';
import BilledHoursText from './BilledHoursText';
import FlexTimeWidget from './FlexTimeWidget';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <BilledHoursText xPos={10} />
        <BilledHoursText xPos={260} />
        <FlexTimeWidget />
      </div>
    )
  }
}

export default Footer;
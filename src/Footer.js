import React, { Component } from 'react';
import HoursText from './HoursText';
import FlexTimeWidget from './FlexTimeWidget';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <HoursText xPos={10} />
        <HoursText xPos={200} />
        <FlexTimeWidget />
      </div>
    )
  }
}

export default Footer;
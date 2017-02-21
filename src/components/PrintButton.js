import React from 'react';

const PrintButton = (props) => {
  return (
    <div style={{float: props.float}} className="header-control-condensed header-control-simple">
      <i className="fa fa-print fa-2x"></i>
    </div>
  )
}

export default PrintButton;
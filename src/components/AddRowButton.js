import React from 'react';

const AddRowButton = (props) => {
  return (
    <div style={{float: props.float}} className="header-control header-control-simple">
      <i className="fa fa-plus fa-2x"></i>
      <span>New Entry</span>
    </div>
  )
} 

export default AddRowButton;
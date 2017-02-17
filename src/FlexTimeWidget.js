import React, { Component } from 'react';

class FlexTimeWidget extends Component {
  constructor(props) {
    super(props);
    this.container = null;
    this.state = Object.assign({
      isLoaded: false,
      min: -20,
      max: 80,
      current: 0,
    }, this.calcIntervals(-20, 80, 0));

    this.onContainerLoad = this.onContainerLoad.bind(this);
    this.onResize = this.onResize.bind(this);
    this.getTargetStyle = this.getTargetStyle.bind(this);
  }

  calcIntervals(min, max, current) {
    const range = max - min;
    return {
      lowerPct: Math.round((Math.abs(min) / range) * 74, 0) ,
      upperPct: Math.round((Math.abs(max) / range) * 74, 0) ,
      currentPct: (current / range) * 74
    }
  }

  getWidthStyle(width) {
    return {
      flex: width
    }
  }

  onContainerLoad(container) {
    this.container = container;
    this.setState({
      isLoaded: true
    })
  }

  onResize() {
    this.onContainerLoad(this.container)
  }

  getContainerStyle() {
    return {
      visibility: this.state.isLoaded ? 'visible' : 'hidden'
    }
  }

  getTargetStyle(){
    if(!this.container) return {};
    let targetWidth = Math.round(this.container.clientHeight * .75,0);
    return {
      height: targetWidth,
      width: targetWidth,
      borderWidth: Math.round(this.container.clientHeight * .75 * .8 / 2,0),
      borderRadius: Math.round(this.container.clientHeight * .75 / 2,0),
      marginLeft: (13 + (this.state.lowerPct+this.state.currentPct) - (targetWidth/this.container.clientWidth)*50) + '%'
    }
  }
  
  componentWillReceiveProps(nextProps){
    this.setState(this.calcIntervals(nextProps.min, nextProps.max, nextProps.current))
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    return (
      <div className="flex-time-widget">
        <div className = "bubble-level-container" ref = {this.onContainerLoad } style = {this.getContainerStyle()}>
          <div className = "min-marker"> <p className="marker-text"> {this.state.min} </p></div>
          <div className = "lower-marker" style = {this.getWidthStyle(this.state.lowerPct)}> </div> 
          <div className = "upper-marker"style = {this.getWidthStyle(this.state.upperPct)} > </div> 
          <div className = "max-marker"> <p className="marker-text">+{this.state.max} </p></div>
          <div className = "target-container">
            <div className="target-marker" style={this.getTargetStyle()}></div>
          </div>
        </div>
      </div>
    )
  }
};

export default FlexTimeWidget;

// class LevelTester extends React.Component {
//   constructor(props){
//   super(props)
//     this.state = {
//     flex:0
//     }
//     this.changeFlex = this.changeFlex.bind(this)
//     }
  
//   changeFlex(event) {
//     console.log('Changed')
//     this.setState({flex:event.target.value})
//   }

//   render() {
//     return <div> 
//     <label>Flex Time:</label>
//     <input type="text" value={this.state.flex} onChange={this.changeFlex}/>
//     <LevelGauge min="-20" max="80" current={parseFloat(this.state.flex)} />
//     </div>
//   }
// }

import React, {PropTypes, Component} from 'react';

import {pins1, pinsHover1, pins2, pinsHover2, pins3, pinsHover3} from './pin.js';

export default class Pin extends Component {


  static defaultProps = {
    hover: true,
    text: ""
  };


  constructor(props) {
    super(props);
  }

  render() {
    let style;
    if(this.props.style==="1")
    style = this.props.hover ? pinsHover1 : pins1;
    else if(this.props.style==="2")
    style = this.props.hover ? pinsHover2 : pins2;
    else
    style = this.props.hover ? pinsHover3 : pins3;


    return (
      <div>

       <button className="hint hint--html hint--info hint--top" style={style}>


       </button>
      </div>
    );
  }
}

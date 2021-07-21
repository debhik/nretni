import React, {PropTypes, Component} from 'react';
import Card from './SimpleCard';
import {pins1, pinsHover1, pins2, pinsHover2, pins3, pinsHover3} from './pin.js';

export default class Pin extends Component {


  static defaultProps = {
    hover: true,
    text: ""
  };


  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state ={
      Flag : false,
      name : null
    }
  }
  message = () => {
    // console.log("me");

    this.setState({flag : !this.state.flag});
    this.setState({name : this.props.text});



  }
  render() {
    let style;
    if(this.props.set==="1")
    style = this.props.hover ? pinsHover1 : pins1;
    else if(this.props.set==="2")
    style = this.props.hover ? pinsHover2 : pins2;
    else
    style = this.props.hover ? pinsHover3 : pins3;


    return (
      <div>
        {/* <Card></Card> */}
       <button className="hint hint--html hint--info hint--top" style={style} onClick={this.message}>
          {this.state.flag === true ? <Card styles= {{position : 'aboslute' , top:'0%'}} text={this.state.name}/>  : <div></div>}
       </button>
      </div>
    );
  }
}

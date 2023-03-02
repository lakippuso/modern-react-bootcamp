import React, { Component } from "react";
import "./Die.css";
const dieLabel = ['one', 'two', 'three', 'four', 'five', 'six'];
class Die extends Component {
  
  handleToggle = () =>{
    this.props.handleClick(this.props.idx);
  }
  render() {
    return (
      <button
        className={`Die ${!this.props.locked ? "" : "Die-locked"} fas fa-dice-${dieLabel[this.props.val - 1]}`}
        style={{ backgroundColor: this.props.locked ? "grey" : "black"}}
        onClick={this.handleToggle}
      >
      </button>
    );
  }
}

export default Die;

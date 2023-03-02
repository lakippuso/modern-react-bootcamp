import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  state = {
    activeRow: true
  }
  handleDoScore = () =>{
    if(this.state.activeRow){
      this.props.doScore();
      this.setState({ activeRow: false});
    }
  }
  render() {
    var className = `RuleRow RuleRow${this.state.activeRow ? "-active": "-disabled"}`;
    return (
      <tr className={className} onClick={this.handleDoScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">
          {this.state.activeRow ? this.props.scoring : this.props.score}
        </td>
      </tr>
    )
  }
}

export default RuleRow;
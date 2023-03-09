import React, {Component} from 'react';
import './Chips.css';
class Chips extends Component {
    state = {
        chips: [],
    }
    componentDidMount() {
        console.log("Component Mount!");
    }
    addChips = () => {
        this.setState( curState => ({
            chips: [...curState.chips, { x: this.genRandNumber(), y: this.genRandNumber()}]
        }))
    }
    genRandNumber = () =>{
        return Math.floor(Math.random() * 100);
    }
    render() {
        console.log("Component Render!");
        return (
            <div className="Chips">
                <h1>Chips</h1>
                <button onClick={this.addChips}>Add Chips</button>
                { this.state.chips.map( c => <img style={{top: `${c.y}vh`, left: `${c.x}vw`}} src='https://www.oishi.com.ph/wp-content/uploads/2017/04/potatochips-Plain-Salted-copy.png' alt='Chips'/> )}
            </div>
          );
    }
}

export default Chips;

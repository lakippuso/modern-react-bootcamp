import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Fish.css';
class Fish extends Component {
    state = {
        fish: [],
    }
    componentDidMount() {
        console.log("Component Mount!");
    }
    addFish = () => {
        this.setState( curState => ({
            fish: [...curState.fish, { x: this.genRandNumber(), y: this.genRandNumber()}]
        }))
    }
    genRandNumber = () =>{
        return Math.floor(Math.random() * 100);
    }
    render() {
        console.log("Component Render!");
        return (
            <div className="Fish">
                <h1>Fish</h1>
                <button onClick={this.addFish}>Add Fish</button>
                <Link to='/'> Go back</Link>
                { this.state.fish.map( c => <img style={{top: `${c.y}vh`, left: `${c.x}vw`}} src='https://cdn3.iconfinder.com/data/icons/korean-street-food/100/Fish_Bread-512.png' alt={`Fish`} /> )}
            </div>
          );
    }
}

export default Fish;

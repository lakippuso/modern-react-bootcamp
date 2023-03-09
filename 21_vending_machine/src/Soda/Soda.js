import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Soda.css';
class Soda extends Component {
    state = {
        soda: [],
    }
    componentDidMount() {
        console.log("Component Mount!");
    }
    addSoda = () => {
        this.setState( curState => ({
            soda: [...curState.soda, { x: this.genRandNumber(), y: this.genRandNumber()}]
        }))
    }
    genRandNumber = () =>{
        return Math.floor(Math.random() * 100);
    }
    render() {
        console.log("Component Render!");
        return (
            <div className="Soda">
                <div className="Soda-form">
                    <h1>Soda</h1>
                    <button onClick={this.addSoda}>Add Soda</button>
                    <Link to='/'> Go back</Link>
                </div>
                {this.state.soda.map( c => <img src='https://www.sprite.com/content/dam/nagbrands/us/sprite/en/new-cans-7-18-22/desktop/sprite-pdp-image-12ozcan-desktop.png' alt='Soda' style={{top: `${c.y}vh`, left: `${c.x}vw`}}/> )}
            </div>
          );
    }
}

export default Soda;

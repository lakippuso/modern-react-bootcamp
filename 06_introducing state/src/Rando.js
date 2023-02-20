import React, {Component} from 'react';

class Rando extends Component {
    constructor(props){
        super(props);
        this.state = {
            num: 0,
        }
        this.makeTimer();
    }
    makeTimer(){
        setInterval(()=>{
            let rand = Math.floor(Math.random() * this.props.max);
            this.setState({num: rand});
        }, 1000);
    }
    render(){
        return (
            <div className="Rando">
                <h1>Rando</h1>
                <p>Random Number: {this.state.num}</p>
            </div>
          );
    }
}

export default Rando;

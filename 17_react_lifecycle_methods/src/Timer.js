import React, {Component} from 'react';
class Timer extends Component {
    state = {
        seconds: new Date(),
    }
    componentDidMount = () =>{
        console.log("in Mount");
        this.timerID = setInterval(() =>{
            this.setState({ seconds: new Date() })
        }, 1000);
    }
    render(){
        let seconds = this.state.seconds.getSeconds();
        return (
            <div className="Timer">
                <h1>Timer</h1>
                <span>{seconds}</span>
            </div>
          );
    }
}

export default Timer;

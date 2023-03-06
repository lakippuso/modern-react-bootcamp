import React, {Component} from 'react';
import './Joke.css';
class Joke extends Component {
    handleUpVote = () => {
        this.props.upVote(this.props.id)
    }
    handleDownVote = () => {
        this.props.downVote(this.props.id)
    }
    render(){
        return (
            <li className="Joke">
                <div className="Joke-rating">
                    <i className="fa-solid fa-arrow-up" onClick={this.handleUpVote}></i>
                    <span>{this.props.rating}</span>
                    <i className="fa-solid fa-arrow-down" onClick={this.handleDownVote}></i>
                </div>
                <div className="Joke-description">
                    <span>{this.props.description}</span>
                </div>
            </li>
          );
    }
}

export default Joke;

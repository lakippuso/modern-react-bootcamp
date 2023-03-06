import React, {Component} from 'react';
import axios from 'axios';
import Joke from '../Joke/Joke';
import './Jokelist.css';

const API_URL = "https://icanhazdadjoke.com/";
const config = {
    headers:{
      "Accept": "application/json",
    }
};

class Jokelist extends Component {
    state = {
        jokes: [],
    }
    constructor(props){
        super(props);
        this.newJokes = this.newJokes.bind(this);
    }
    componentDidMount() {
        this.newJokes();
    }
    async newJokes() {
        let newJokes = [];
        while(newJokes.length !== 10){
            let data = (await axios.get(API_URL,config)).data;
            if( !this.state.jokes.includes(data.id) && !newJokes.includes(data.id) ){
                newJokes = [...newJokes, { id: data.id, joke: data.joke, rating: 0 }]
            }
        }
        this.setState( curState => ({
            jokes: curState.jokes.concat(newJokes).sort((a, b) => b.rating - a.rating)
        }));
    }
    upVote = jokeId => {
        this.state.jokes.forEach( (j, index) => {
            if( j.id === jokeId){
                let jokes = this.state.jokes;
                jokes[index].rating = this.state.jokes[index].rating + 1
                this.setState( curState => ({
                    jokes: jokes.sort((a, b) => b.rating - a.rating)
                }));
            }
        })
    }
    downVote = jokeId => {
        this.state.jokes.forEach( (j, index) => {
            if( j.id === jokeId){
                let jokes = this.state.jokes;
                jokes[index].rating = this.state.jokes[index].rating - 1
                this.setState( curState => ({
                    jokes: jokes.sort((a, b) => b.rating - a.rating)
                }));
            }
        })
    }
    render(){
        return (
            <div className="Jokelist">
                <div className="Jokelist-header">
                    <h1>Dad Jokes</h1>
                    <button onClick={this.newJokes}>New Jokes</button>
                </div>
                <div className="Jokelist-content">
                    <ul>
                        {
                            this.state.jokes.map(n => 
                                <Joke key={n.id} 
                                    id={n.id} 
                                    rating={n.rating} 
                                    description={n.joke} 
                                    upVote={this.upVote}
                                    downVote={this.downVote}/>
                            )
                        }
                    </ul>
                </div>
            </div>
          );
    }
}

export default Jokelist;

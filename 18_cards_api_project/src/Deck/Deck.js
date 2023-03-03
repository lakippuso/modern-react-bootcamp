import React, {Component} from 'react';
import axios from 'axios';
import './Deck.css';
import Card from '../Card/Card';

class Deck extends Component {
    state = {
        deckId: '',
        cardRemaining: 0,
        isDeckLoading: true,
        isDrawing: false,
        cards: [],
    }
    constructor(props){
        super(props);
        this.draw = this.draw.bind(this);
    }
    async componentDidMount(){
        const url = "https://deckofcardsapi.com/api/deck/new/shuffle";
        let response = await axios.get(url);
        let data = response.data;
        this.setState({ deckId: data.deck_id, 
                        cardRemaining: data.remaining, 
                        isDeckLoading: false});
    }
    async draw(){
        if(this.state.remaining !== 0){
            this.setState({ isDrawing: true});
            const url = `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`;
            let response = await axios.get(url);
            let data = response.data;
            this.setState(state => ({ cards: [...state.cards, data.cards], 
                            cardRemaining: data.remaining, 
                            isDrawing: false}));
        }
    }
    render(){
        return (
            <div className="Deck">
                {
                    !this.state.isDeckLoading
                    ?(
                        <div className="Deck-content">
                            <h1>Deck: {this.state.deckId}</h1>
                            <h1>Cards Remaining: {this.state.cardRemaining}</h1>
                            <button onClick={this.draw} 
                                    disabled={ this.state.isDrawing || this.state.cardRemaining === 0} >
                                Gimme a Card!
                            </button>
                            <div className="Card">
                                { this.state.cards.map( n => 
                                        <Card key={n[0].id} 
                                            image={n[0].images.png} 
                                            code={n[0].images.code} />
                                )}
                            </div>
                        </div>
                    )
                    :(
                        <div className="loader">
                            <svg className="circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
                            </svg>
                        </div>
                    )
                }
                
            </div>
          );
    }
}

export default Deck;

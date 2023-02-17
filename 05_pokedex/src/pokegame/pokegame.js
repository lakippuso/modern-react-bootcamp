import './pokegame.css';

import Helper from '../services/helper';
import Player from '../player/player';

let hp = new Helper;

function Pokegame(){
    var pokemons = hp.getAllPokemon();
    var players = hp.randChunkSplit(pokemons,4,4);
    var score = [];
    
    //Calculate Score
    players.forEach((player,index) =>{
        score[index] = 0;
        player.forEach((pokemon) =>{
            score[index] += pokemon.base_experience;
        })
        player.score = score[index];
    });

    var winner = score[0] > score[1];

    if(winner){
        players[0].winner = true
        players[1].winner = false
    }
    else{
        players[1].winner = true
        players[0].winner = false
    }

    return (
        <div className="Pokegame container-fluid">
            <div className="game-header"><h1>PokeGame!</h1></div>
            <div className="row">
                <span>{winner ? "Player 1 Wins!": "Player 2 wins!"}</span>
                {
                    players.map((player, index) =>(
                        <Player key={index} pokemons={player} score={player.score} id={index + 1}/>
                    ))
                }
            </div>
        </div>
    );
}


export default Pokegame;
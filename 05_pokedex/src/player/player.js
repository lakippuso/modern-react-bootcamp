import Pokemon from '../pokemon/pokemon';
import './player.css';

function Player(props){
    var pokemons = props.pokemons;
    return (
        <div className="Player row">
            {pokemons.map((pokemon) => (
                <Pokemon 
                    key={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.name}
                    type={pokemon.type}
                    base_experience={pokemon.base_experience}
                />
            ))}
            <div className="col">Player {props.id} | {props.score}</div>
        </div>
    );
}

export default Player;
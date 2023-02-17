import Pokemon, {getAllPokemon} from '../pokemon/pokemon';
import './pokedex.css';

function Pokedex(){
    const pokemons = getAllPokemon();

    var cards = pokemons.map((pokemon) => (
        <Pokemon 
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            base_experience={pokemon.base_experience}
        />
    ));

    return(
        <div className="Pokedex container">
            <div className="Pokedex-header row"><h2>Pokedex</h2></div>
            <div className="row">
                {cards}
            </div>
        </div>
    );
}

export default Pokedex;
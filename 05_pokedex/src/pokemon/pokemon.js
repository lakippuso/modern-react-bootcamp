import './pokemon.css';

function getAllPokemon(){
    return [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ];
}
function Pokemon(props){
    var pic = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+props.id+'.png';
    return(
        <div className='card Pokemon col-3'>
            <div className="card-header"><img src={pic} alt="tb" /></div>
            <div className="card-body">
                <p>ID: {props.id}</p>
                <p>Name: {props.name}</p>
                <p>Type: {props.type}</p>
                <p>Base Experience: {props.base_experience}</p>
            </div>
        </div>
    )
}

export default Pokemon;
export {getAllPokemon};
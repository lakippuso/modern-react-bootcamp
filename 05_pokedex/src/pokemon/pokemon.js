import './pokemon.css';
const PokeAPI1 = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
// const PokeAPI2 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

let padToThree = (number) => (number <= 99 ? `00${number}`.slice(-3) : number)

function Pokemon(props){
    var pic = `${PokeAPI1}${padToThree(props.id)}.png`;

    return(
        <div className='card Pokemon col-3 shadow'>
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
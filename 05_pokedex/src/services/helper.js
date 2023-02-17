const pokemonCollection = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
];

class Helper{
    constructor(){

    }
    randChunkSplit = ( arr, min, max) => {
        // uncomment this line if you don't want the original array to be affected
        // var arr = arr.slice();
        var arrs = [],size=1; 
        var min=min||1;
        var max=max||min||1;
        while (arr.length > 0) {
            size = Math.min(max,Math.floor( (Math.random()* max)+ min));
            arrs.push(arr.splice(0, size));
        }
        return arrs;
    }
    getAllPokemon = ()=>{
        // console.log(pokemonCollection);
        return pokemonCollection;
    }
}

export default Helper;
function selectFood(arr){
    const randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}
function removeFood(foods, food) {
    const index = foods.indexOf(food);
    return foods.splice(index,1);
}

export {selectFood, removeFood};
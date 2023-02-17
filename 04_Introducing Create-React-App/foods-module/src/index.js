import getFoods from "./foods";
import {selectFood, removeFood } from "./helpers";

var foods = getFoods();
var selectedFood = selectFood(foods);

console.log("Foods available " + foods);
console.log("I'd like one "+selectedFood+" please!");
var removedFood = removeFood(foods, selectedFood);
console.log("Heres your " + removedFood);
console.log("Foods available " + foods);
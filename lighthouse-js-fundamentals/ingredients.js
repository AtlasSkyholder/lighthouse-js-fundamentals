const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var j = 0;
while(j < ingredients.length){
    console.log(ingredients[j]);
    j++;
}

// Write a for loop that prints out the contents of ingredients:

for(var i = 0; i < ingredients.length; i++){
    console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for(var k = ingredients.length - 1; k >= 0; k--){
    console.log(ingredients[k]);
}
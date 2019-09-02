const conditionalSum = function(values, condition) {
    let condSum = 0;
    if(condition === "even"){
        for(var i = 0; i < values.length; i++){
            if(values[i] % 2 === 0){
                condSum += values[i];
            }
        }
    } else {
        for(var i = 0; i < values.length; i++){
            if(values[i] % 2 !== 0){
                condSum += values[i];
            }
        }
    }
    return condSum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
function lastIndexOf(list, target){
    var lastNum = null;
    for( var i = list.length -1; i >= 0; i--){
        if(list[i] === target){
            lastNum = i;
            break;
        }
    }

    if(lastNum === null){
        return -1;
    } else {
        return lastNum;
    }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));
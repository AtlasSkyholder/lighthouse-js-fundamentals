let merge = function(array1, array2){
    let fullArray = array1.concat(array2);
    fullArray.sort(function(a, b){return a-b});
    return fullArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([ 1, 2, 6 ], []));
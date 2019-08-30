function range(start, end, step){
    var numRange = [];

    if(start === undefined || end === undefined || step === undefined){
        return numRange;
    } else if ( start > end){
        return numRange;
    } else if (step <= 0){
        return numRange;
    } else{
        for(var i = start; i <= end; i += step){
            numRange.push(i);
        }
    }

    return numRange;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
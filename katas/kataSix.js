let repeatNumbers = function(data) {
    let line = "";
    if(data.length === 1){
        for(let i = 0; i < data.length; i++){
            for(let j = 0; j < data[i][1]; j++){
                line += data[i][0];
            }
        }
    } else {
        for(let i = 0; i < data.length; i++){
            if(i === data.length - 1){
                for(let j = 0; j < data[i][1]; j++){
                    line += data[i][0];
                }
            } else {
                for(let j = 0; j < data[i][1]; j++){
                    line += data[i][0];
                }
                line += ", ";
            }
        }
    }
    return line;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
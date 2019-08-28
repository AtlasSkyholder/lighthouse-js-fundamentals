function howManyHundreds(bottles) {
    var pack = Math.floor(bottles / 100);
    return pack;
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));
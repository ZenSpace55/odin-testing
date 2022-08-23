function reverse(myString){
    var splitString = myString.split("");
    splitString = splitString.reverse();
    return splitString.join("");
}

module.exports = reverse
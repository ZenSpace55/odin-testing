function analyze(myArray){
    let av, min, max, len;
    len = myArray.length;

    let minTrack = myArray[0];
    let maxTrack = myArray[0];
    let avTrack = 0;
    for (let i = 0; i < myArray.length; i++){
        if (myArray[i] < minTrack){
            minTrack = myArray[i];
        }
        if (myArray[i] > maxTrack){
            maxTrack = myArray[i];
        }
        avTrack += myArray[i];
    }
    min = minTrack;
    max = maxTrack;
    av = avTrack / len;



    return{
        average: av,
        minimum: min,
        maximum: max,
        length: len,
    }
}

module.exports = analyze
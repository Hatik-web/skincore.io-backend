function getRandomInt(min, max) {
    console.log("Random Int ///////////////////////////////////////")
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
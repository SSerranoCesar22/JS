let word = "palabra";
//body method
function changeLetter(word) {
    console.log(word.replaceAll("a","o")); 
}
function startBy(word){
    let start = "aca";
    console.log(word.startsWith(start));

}
function salutation(word){
    console.log(word.repeat(3));

}
//call methods
changeLetter(word);
startBy("escuela");
startBy("academia");
salutation("hola \n");
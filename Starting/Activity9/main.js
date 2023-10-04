let arr = [];
//body methods

function loopForEach(arr){
    arr = ["a","b","c","d","e"];
    arr.forEach(element => {
        console.log(element);
    });

}
function subtract(num){
    for (num ;num >= 0; num--) {
        console.log(num);
    }
}
loopForEach(arr);
subtract(5);
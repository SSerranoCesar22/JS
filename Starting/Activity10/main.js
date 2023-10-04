let numero = 1;
let i = 0;

do {
    if( i === 0){ // enter in if 1 time
        i++;
        numero--;
        console.log(numero);
    }
    else{ // enter in else and plus number since number is 5
        numero++;
        console.log(numero);
    }
} while (numero < 5);
//output: 0 1 2 3 4 5
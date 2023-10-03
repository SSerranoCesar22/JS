function randomNumber(){
    let number;
    number = Math.round(Math.random());
    let mensaje = number == 1 ? "cara" : "cruz"; 
    console.log(number); 
    console.log(mensaje);
    }

randomNumber();
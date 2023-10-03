let num1, num2, num3, resultado;
let nombre,apellido, apellido2;
num1 = 10;
num2 = 20;
num3 = 5;
nombre = "Sergio";
apellido = "Serrano";
apellido2 = "Cesar";
// function body
function suma(n1, n2, n3) {
  console.log(
    "numero 1:" + n1,
    "\n",
    "numero 2: " + n2,
    "\n",
    "numero 3: " + n3,
    "\n"
  );
  return n1 + n2 + n3;
}
function persona(n,s1,s2){
    console.log(n+s1+s2);

}
function biggerthan(n1,n2){
    let bigger;
    bigger = n1 > n2 ? n1 : n2 ;
    console.log("los numeros comparados son: ",n1," y ", n2);
    console.log("el numero mayor es: ",bigger);
}
//call functions
resultado = suma(num1, num2, num3);
persona(nombre,apellido,apellido2);
biggerthan(num1,num2);
console.log("la suma del numero es: ",resultado);

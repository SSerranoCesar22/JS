let nombre, apellido, apto;
nombre = "Sergio";
apellido = "Serrano";
apto = false;
// body functions
const funcionRetornable = (n, a) => {
  console.log("nombre: " + n, "apellido: " + a);

  return;
};
function funcionNoRetornable(pasa){
    console.log(pasa);
    
}function mostrarValores(...args) {
    args.forEach(function(valor) {
      console.log(valor);
    });
  }
  
  //call functions
  funcionRetornable(nombre, apellido);
  funcionNoRetornable(apto);
  mostrarValores(1, 2, 3, 4, 5);
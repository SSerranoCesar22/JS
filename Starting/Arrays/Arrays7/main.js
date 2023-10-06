//declare constant
const valueInput = document.querySelector(".value");
const valueInputRemove = document.querySelector(".value2");
const decrement = document.querySelector("#decrement");
const increment = document.querySelector("#increment");
const decrementRemove = document.querySelector("#decrementremove");
const incrementRemove = document.querySelector("#incrementremove");
const resultContainer = document.getElementById("resultContainer");
const push = document.querySelector("#push");
const pop = document.querySelector("#pop");
const shift = document.querySelector("#shift");
const remove = document.querySelector("#remove");
//declare variable
let vehicles = ["🚗", "🚕", "🚙", "🚌"];
let servicesVehicles = ["🚑", "🚓", "🚒"];
let i = 0;
//increment method
increment.addEventListener("click", () => {
  let currentValue = parseInt(valueInput.value);
  valueInput.value = ++currentValue;
});
//decrement method
decrement.addEventListener("click", () => {
  let currentValue = parseInt(valueInput.value);
  valueInput.value = currentValue > 0 ? --currentValue : currentValue;
});
//increment method
incrementRemove.addEventListener("click", () => {
  let currentValueRemove = parseInt(valueInputRemove.value);
  valueInputRemove.value = ++currentValueRemove;
});
//decrement method
decrementRemove.addEventListener("click", () => {
  let currentValueRemove = parseInt(valueInputRemove.value);
  valueInputRemove.value =
    currentValueRemove > 0 ? --currentValueRemove : currentValueRemove;
});
//push method
push.addEventListener("click", () => {
    if (i < servicesVehicles.length) {
      const newValue = servicesVehicles[i];
      vehicles.push(newValue);
      i++;
      
      resultContainer.textContent = `Nuevo valor agregado: ${newValue}`;
      resultContainer.appendChild(
        document.createTextNode(`Array actual: [${vehicles.join(", ")}]`)
      );
    } else {
      resultContainer.textContent = "No hay más valores para agregar.";
    }
  });
//unshift method
unshift.addEventListener("click", () => {
    if (i < servicesVehicles.length) {
      const newValue = servicesVehicles[i];
      vehicles.unshift(newValue);
      i++;

      resultContainer.textContent = `Nuevo valor agregado: ${newValue}`;
      resultContainer.appendChild(
        document.createTextNode(`Array actual: [${vehicles.join(", ")}]`)
      );
    } else {
      resultContainer.textContent = "No hay más valores para agregar.";
    }
  });
  //insert method
  insert.addEventListener("click", () => {
    const indexToInsert = parseInt(valueInput.value);
    if (
      !isNaN(indexToInsert) &&
      indexToInsert >= 0 &&
      indexToInsert <= vehicles.length // Permitir la inserción al final del array
    ) {
        const addValue = servicesVehicles[indexToInsert];
        vehicles.splice(indexToInsert, 0, addValue);
  
      resultContainer.textContent = `Elemento añadido: ${addValue}`;
      resultContainer.appendChild(
        document.createTextNode(`Array actual: [${vehicles.join(", ")}]`)
      );
    } else {
      resultContainer.textContent = "Índice no válido";
    }
  });
  
//pop method
pop.addEventListener("click", () => {
  if (vehicles.length > 0) {
    const addVehicle = vehicles.pop();
    resultContainer.textContent = `Elemento eliminado: ${addVehicle}`;
    resultContainer.appendChild(
      document.createTextNode(`Array actual: [${vehicles.join(", ")}]`)
    );
  } else {
    resultContainer.textContent = "El array está vacío.";
  }
});
//shift method
shift.addEventListener("click", () => {
  if (vehicles.length > 0) {
    const addVehicle = vehicles.shift();
    resultContainer.textContent = `Elemento eliminado: ${addVehicle}`;
    resultContainer.appendChild(
      document.createTextNode(`Array actual: [${vehicles.join(", ")}]`)
    );
  } else {
    resultContainer.textContent = "El array está vacío.";
  }
});
//remove method
remove.addEventListener("click", () => {
    const indexToRemove = parseInt(valueInput.value);
    if (
      !isNaN(indexToRemove) &&
      indexToRemove >= 0 &&
      indexToRemove < vehicles.length
    ) {
      const addValue = vehicles[indexToRemove];
      vehicles.splice(indexToRemove, 1);
      resultContainer.textContent = `Elemento eliminado: ${addValue}`;
      resultContainer.appendChild(
        document.createTextNode(`Array actual: [${vehicles.join(", ")}]`)
      );
    } else {
      resultContainer.textContent = "Índice no válido";
    }
  });

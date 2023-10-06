let arr = ["🎴","🎴","🎴","🃏","🎴","🎴","🎴"];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i]);
  if (arr[i] === "🎴" && arr[i + 1] === "🎴") {
    newArr.push("🃏"); // Agrega un joker entre cada par de cartas iguales
  }
}

console.log(newArr);
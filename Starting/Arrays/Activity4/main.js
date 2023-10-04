let arr = ["🍓","🍋","🍓","🍋","🍓"];
arr = arr.map(item => item === "🍓" ? "🍄" : item);
console.log(arr);
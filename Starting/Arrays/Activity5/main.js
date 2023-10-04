let arr = ["🌶","🥛","🌶","🥛","🌶","🥛"];
arr = arr.map(item => {
  if (item === "🌶") {
    return "🌶", "😵";
  }
  return item;
});
console.log(arr);
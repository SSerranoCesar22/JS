const mo = Math.floor(Math.random() * 12) + 1;
let num = "uno";
//body method
function month(month) {
  console.log(month);
  switch (month) {
    case 1:
      console.log("January");

      break;
    case 2:
      console.log("February");

      break;
    case 3:
      console.log("March");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("May");
      break;
    case 6:
      console.log("June");
      break;
    case 7:
      console.log("July");
      break;
    case 8:
      console.log("August");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("October");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("December");
      break;

    default:
      console.log("it's not a mo");
      break;
  }
}
function number(num) {
  let number;
  switch (num) {
    case "uno":
      number = 1;
      break;

    case "dos":
      number = 2;
      break;

    case "tres":
      number = 3;
      break;

    case "cuatro":
      number = 4;
      break;
    case 5:
      break;

    default:
      break;
  }
  console.log(number);
}
//call methods
month(mo);
number(num);

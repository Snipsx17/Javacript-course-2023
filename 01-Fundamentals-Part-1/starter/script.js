// BMI = mass / (height^2)
// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// BMIMark = BMI(massMark, heightMark).toFixed(2);
// BMIJohn = BMI(massJohn, heightJohn).toFixed(2);

// let markHigherBMI = BMIMark > BMIJohn;

// console.log(`BMI Mark = ${BMIMark}`);
// console.log(`BMI John = ${BMIJohn}`);
// console.log(`Mark has a higher BMI than John: ${markHigherBMI}`);

// function BMI(mass, height) {
//   bmi = mass / height ** 2;
//   return bmi;
// }

// TYPE CONVERTION
let age = "31";
age = Number(age);
console.log(typeof age);

// TYPE COERCION
// cuando JS cambia los tipo automaticamente
console.log("i'm " + age + " years");

// statements and exprecions
// statements = producen un valor
3 + 4;
1991;
true && false && !false;

// expecion no producen un valor
if (30 < 10) {
  const str = "30 is bigger";
}

// ternary operator
age = 19;
const drink = age > 18 ? "Wine 🍷" : "Water 💧";
console.log(drink);

// setTimeout(() => {
//   console.log("Hello");
// }, 4000);

//call backs
// function one(call_two) {
//   console.log("step 1");
//   call_two();
// }

// function two() {}

// one(() => {
//   console.log("step 2");
// });
// let stocks = {
//   Fruits: ["BANANA", "STRAWBERRY", "GRAPES", "APPLE"],
// };

// let order = () => {
//   setTimeout(() => {
//     console.log(stocks.Fruits[0]);
//   }, 2000);
// };

// order();

//promise in js
// let iceCream = () => {
//   setTimeout(() => {
//     console.log("Order placed");
//     setTimeout(() => {
//       console.log("Order Started");
//       setTimeout(() => {
//         console.log("Order successful");
//       }, 1000);
//     }, 1000);
//   }, 2000);
// };

// let iceCream = new Promise((resolve, reject) => {
//   let makekingIce = true;
//   if (makekingIce) {
//     resolve("I have");
//   } else {
//     reject("dont have");
//   }
// });

// iceCream.then(()={

// })

// iceCream();

// promise

// let fun = new Promise((resolve, reject) => {
//   let isTrue = true;
//   if (false) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// fun
//   .then(() => {
//     console.log("MAKE TEA");
//   })
//   .then(() => {
//     console.log("Tea is Ready.");
//   })
//   .catch(() => {
//     console.log("Error");
//   });

// function calculateConceptionDate(birthDateString) {
//   // Parse the birth date string to a Date object
//   var birthDate = new Date(birthDateString);

//   // Calculate the gestation period in milliseconds
//   // 38 weeks * 7 days/week * 24 hours/day * 60 minutes/hour * 60 seconds/minute * 1000 milliseconds/second
//   var gestationPeriod = 38 * 7 * 24 * 60 * 60 * 1000;

//   // Calculate the conception date by subtracting the gestation period from the birth date
//   var conceptionDate = new Date(birthDate.getTime() - gestationPeriod);

//   // Format the date to YYYY-MM-DD
//   var year = conceptionDate.getFullYear();
//   var month = (conceptionDate.getMonth() + 1).toString().padStart(2, "0"); // getMonth() is zero-indexed
//   var day = conceptionDate.getDate().toString().padStart(2, "0");

//   return `${year}-${month}-${day}`;
// }

// var birthDateString = "2002-07-12"; // Enter the birth date in YYYY-MM-DD format
// var conceptionDate = calculateConceptionDate(birthDateString);
// console.log("The estimated conception date is:", conceptionDate);

// function sayHello() {
//   return 1;
// }
// console.log(typeof sayHello());

// async function sayHello2() {
//   return "hello";
// }
// console.log(
//   sayHello2().then((res) => {
//     console.log("hii" + res);
//   })
// );
// sayHello2().then((value) => console.log(value));

// console.log("Hello");

const arr = [1, 2, 4, 5];

const output = arr.map((double) => {
  console.log(double * 2);
});

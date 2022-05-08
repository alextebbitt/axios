const firstExerciseSection = document.getElementById("first-exercise");
const secondExerciseSection = document.getElementById("second-exercise");
const thirdExerciseSection = document.getElementById("third-exercise");

// 1. Quiero un perrito, pero no se que raza escoger, ¿me ayudas?
//Imprimir por consola la lista de razas de todos los perros.

let resultPromise = axios.get("https://dog.ceo/api/breeds/list/all");
/* the callback here is the arrow function, toto is gonna be the result of the promise  */
// resultPromise.then((toto) => display(toto));
/* the callback here is the function called toto , params is gonna be the result of the promise */
// resultPromise.then(function toto(params) {
//
// do whatever
// });
resultPromise.then(display);

//Imprimir por consola una imagen random de una raza.

axios
  .get("https://dog.ceo/api/breeds/image/random/1")
  .then((data) => display2(data, secondExerciseSection, 500));

// Imprimir por consola todas las imágenes de una raza concreta.

axios
  .get("https://dog.ceo/api/breed/bulldog/images")
  .then((data) => display2(data, thirdExerciseSection, 200));

function display(res) {
  for (const property in res.data.message) {
    firstExerciseSection.innerHTML += property + ", ";
   
    let value = res.data.message[property];

  }
}


function display2(res, titi, height) {
  for (const key in res.data.message) {
    titi.innerHTML +=
      "<img src='" + res.data.message[key] + "' height='" + height + "px'>";
  }
}
// function display3(res, containerId) {
//   let div3 = document.getElementById(containerId);
//   for (const property in res.data.message) {
//     thirdExerciseSection.innerHTML += property;
//   }
//
// }
// let o = {
//   message: ["https://images.dog.ceo/breeds/lhasa/n02098413_1713.jpg"],
//   status: "success",
// };

// let obj = {
//   property1: "whatever",
//   property2: "whatever2",
//   property3: "whatever3",
//   property4: "whatever4",
//   property5: "whatever5",
// };

// let array = ["whatever", "whatever2", "whatever3"];
// let array = {
//   0: "whatever",
//   1: "whatever2",
//   2: "whatever3",
// };

// for (const key in array) {
// }

// obj.property1; // whatever
// obj["property1"]; //whatever

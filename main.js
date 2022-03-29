//Part 1: The alerter
//Let's start out simple, in your `index.html` file, create a form that contains a text input and a submit button. ✅

//From here, use Javascript to make it so that when the submit button is clicked, the page displays the text inside of the text input as a browser alert.  ✅

let inputText = document.querySelector(`#input`);

let inputSubmit = document.querySelector(`#submitButton`);

let form = document.querySelector(`form`);

form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  alert(inputText.value);
  inputText.value = ``;
});

//Part 2: Sandwich Builder

// Somewhere below your previous form, create a new form.  The purpose of this form will be to allow the user to select ingredients that will go in a sandwich. Inside of your form, create at least ten checkbox inputs that correspond to various sandwich ingredients (wheat bread, lettuce, peppers, etc.). Additionally, create a submit button.

// Finally, wire up your form using Javascript so that upon clicking the submit button, a browser alert is displayed with a string with all of the ingredients that the user selected by checking the inputs (i.e.: "Your sandwich contains: bread, pesto, tomato, mozzarella, spinach").

let olives = document.querySelector(`#olives`);
let tomato = document.querySelector(`#tomato`);
let romaine_lettuce = document.querySelector(`#romaine_lettuce`);
let mustard = document.querySelector(`#mustard`);
let pickles = document.querySelector(`#pickles`);
let cheddar = document.querySelector(`#cheddar_cheese`);
let avocado = document.querySelector(`#avocado`);
let mayonnaise = document.querySelector(`#mayonnaise`);
let bacon = document.querySelector(`#bacon`);
let arugula = document.querySelector(`#arugula`);
let sandwich = document.querySelector(`#sandwich_submit`);

//CLEAR FUNCTION
const unCheck = () => {
  const inputs = document.querySelectorAll(`input`);
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
};

sandwich.addEventListener(`click`, (event) => {
  console.log(`Was Clicked`);
  event.preventDefault();
  let sandwich_complete = `Your sandwich contains: `;
  if (olives.checked) {
    sandwich_complete += ` olives, `;
  }
  if (tomato.checked) {
    sandwich_complete += `tomato, `;
  }
  if (romaine_lettuce.checked) {
      sandwich_complete += `romaine lettuce, `
  }
  if (mustard.checked) {
      sandwich_complete += `mustard, `
  }
  if (pickles.checked) {
      sandwich_complete += `pickles, `
  }
  if (cheddar.checked) {
      sandwich_complete += `cheddar cheese, `
  }
  if (avocado.checked) {
      sandwich_complete += `avocado, `
  }
  if (mayonnaise.checked) {
      sandwich_complete += `mayonnaise, `
  }
  if (bacon.checked) {
      sandwich_complete += `bacon, `
  }
  if (bacon.checked) {
      sandwich_complete += `bacon, `
  }
  if (arugula.checked) {
      sandwich_complete += `arugula, `
  }
  console.log(sandwich_complete);
  alert(sandwich_complete);
  unCheck();
});

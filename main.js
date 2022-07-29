//
let submitState = document.querySelector(".submit");
let postState = document.querySelector(".post");
let button = document.querySelector(".button");
let radio = document.querySelectorAll(".opt");
let form = document.querySelector(".form");

// Show posted message when button is clicked
function displayPost() {
  button.addEventListener("click", () => {
    submitState.style.display = "none";
    postState.style.display = "block";
  });
}
displayPost();

// Show textarea when a start is clicked
function showForm() {
  Array.from(radio).forEach(function (ele) {
    ele.addEventListener("click", () => {
      form.style.display = "block";
    });
  });
}
showForm();

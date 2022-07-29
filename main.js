//
const submitState = document.querySelector(".submit");
const postState = document.querySelector(".post");
const button = document.querySelector(".button");
const radio = document.querySelectorAll(".opt");
const form = document.querySelector(".form");
const choice = document.querySelector(".post__number");
const submitLabel = document.querySelectorAll(".submit_stars label");

Array.from(submitLabel).forEach(function (label) {
  console.log(label);
  // label.style.float = "left";
});

let btn_ = 0;
function showForm() {
  Array.from(radio).forEach(function (ele) {
    ele.addEventListener("click", () => {
      form.style.display = "block";
      btn_ = ele.value;
      console.log(ele.value);
    });
  });

  button.addEventListener("click", () => {
    if (btn_ === 0) {
      alert("Kindly rate us before you sumbit!");
    } else {
      //   label.style.float = "left";
      choice.textContent = btn_;
      submitState.style.display = "none";
      postState.style.display = "block";
    }
  });
}
showForm();

const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputAddress = document.getElementById("inputAddress");
const submit = document.getElementById("submit");
const form = document.querySelector("form");

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});

document.querySelectorAll(".wrapper").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".target").forEach((item) => {
      item.classList.remove("change");
    });
  });
});

// progress bar

// form validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputCheck();
});




// get form element
let form = document.querySelector(".header__newsletter-form");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // get input text value
  const inputText = document.querySelector(".header__input").value.trim();
  console.log(typeof inputText);
  if (inputText === "") {
    alert("please fill in form");
    return;
  } else if (inputText.length < 8) {
    alert(" email must be longer than 8 characters");
  } else if (!inputText.includes("@")) {
    alert("please enter a valid email");
    return;
  }
});

function displaySuccess() {}

// get form element
let form = document.querySelector(".header__newsletter-form");
console.log(form);
// get success element
let successElement = document.querySelector(".success");
console.log(successElement);

// get header element
let header = document.querySelector(".header");

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

function displaySuccess(inputText) {
  //   header.classList.add("submitted");

  let successIcon = document.createElement("img");
  successIcon.classList.add("success__icon");
  successIcon.src = "assets/images/icon-success.svg";
  successElement.appendChild(successIcon);

  // text for success
  let successTitle = document.createElement("h1");
  successTitle.classList.add("success__title");
  successTitle.textContent = "Thanks for Subscribing!";
  successElement.appendChild(successTitle);

  let successPara = document.createElement("p");
  successPara.classList.add("success__para");
  successPara.textContent = `A confirmation email has been sent to 
  ${inputText}. 
  Please open it and click the button inside 
  to confirm your subscription`;
  successElement.appendChild(successPara);

  let successButton = document.createElement("button");
  successButton.classList.add("success__button");
  successButton.textContent = "dismiss message";
  successElement.appendChild(successButton);
}

displaySuccess("bilalhassen799@gmail.com");

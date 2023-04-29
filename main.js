let conductButton = document.querySelector(".conduct");
let termsButton = document.querySelector(".terms");

conductButton.addEventListener("click", (e) => {
  location.href = "/conduct.html";
});

termsButton.addEventListener("click", (e) => {
  location.href = "/terms.html";
});

let kwdclogoButton = document.querySelector(".kwdc-logo");
let conductButton = document.querySelector(".conduct");
let termsButton = document.querySelector(".terms");

kwdclogoButton.addEventListener("click", (e) => {
  location.href = "/.";
});

conductButton.addEventListener("click", (e) => {
  if (e.target.className.indexOf("active") > 0) {
    location.href = "/.";
  } else {
    console.log(e.target.className);
    location.href = "/conduct.html";
  }
});

termsButton.addEventListener("click", (e) => {
  if (e.target.className.indexOf("active") > 0) {
    location.href = "/.";
  } else {
    console.log(e.target.className);
    location.href = "/terms.html";
  }
});

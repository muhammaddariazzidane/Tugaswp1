function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

const aov = document.querySelector(".aov");
const alert = document.querySelector(".alert");
const pubgm = document.querySelector(".pubgm");
const pubgAlert = document.querySelector(".pubg-alert");
const lolwr = document.querySelector(".lolwr");
const lolAlert = document.querySelector(".lol-alert");

aov.addEventListener("click", function () {
  alert.classList.remove("d-none");
  alert.classList.add("d-block");
  setTimeout(function () {
    alert.classList.add("d-none");
  }, 3000);
});
pubgm.addEventListener("click", function () {
  pubgAlert.classList.remove("d-none");
  pubgAlert.classList.add("d-block");
  setTimeout(function () {
    pubgAlert.classList.add("d-none");
  }, 3000);
});
lolwr.addEventListener("click", function () {
  lolAlert.classList.remove("d-none");
  lolAlert.classList.add("d-block");
  setTimeout(function () {
    lolAlert.classList.add("d-none");
  }, 3000);
});

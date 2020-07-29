const btnComeIn = document.getElementById("buttonWelcome");
const hello = document.getElementById("hello");

btnComeIn.addEventListener("click", function () {
  hello.classList.add("leftPageUp");
  setTimeout(function () {
    window.location.href = "home.html";
  }, 3000);
});

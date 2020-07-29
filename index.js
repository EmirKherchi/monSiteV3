const welcome = document.getElementById("welcome");
const logo = document.getElementById("logo");
const landingPage = document.getElementById("LandingPage");

window.addEventListener("load", function () {
  setTimeout(function () {
    welcome.classList.add("slideUp");
    return setTimeout(function () {
      logo.classList.add("opac");
      return setTimeout(function () {
        document.body.removeChild(landingPage);
        // faire apparaître le contenu de la page d'acceuil
      }, 2000);
    }, 100);
  }, 3000);
});

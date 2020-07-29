const welcome = document.getElementById("welcome");
const logo = document.getElementById("logo");

const landingPage = document.getElementById("LandingPage");

const worksLink = document.getElementById("works");
const contactLink = document.getElementById("contact");

window.addEventListener("load", function () {
  setTimeout(function () {
    welcome.classList.add("slideUp");
    return setTimeout(function () {
      logo.classList.add("opac");
      return setTimeout(function () {
        document.body.removeChild(landingPage);
        // faire apparaître le contenu de la page d'accueil
        return setTimeout(function () {
          worksLink.classList.add("animli");
          return setTimeout(function () {
            contactLink.classList.add("animli");
          }, 400);
        }, 300);
      }, 1000);
    }, 1000);
  }, 3000);
});

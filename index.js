const welcome = document.getElementById("welcome");
const logo = document.getElementById("logo");


const landingPage = document.getElementById("LandingPage");

const worksLink = document.getElementById("works");
const contactLink = document.getElementById("contact");


const addSection = (sectionName) => {
  const getSections = document.querySelector("section");
  getSections.remove()
  const newSection = document.createElement("section");
  const newDiv = document.createElement("div");
  newDiv.innerHTML = "<h1>Test</h1>";
  newDiv.classList.add("marginAuto");
  newSection.id = sectionName;
  document.body.appendChild(newSection);
  newSection.appendChild(newDiv);
  newSection.classList.add("pageBase", "zoomIn");
};

window.addEventListener("load", function () {
  setTimeout(function () {
    welcome.classList.add("ZoomOut");
    return setTimeout(function () {
      logo.classList.add("opac");
      return setTimeout(function () {
        worksLink.classList.add("animli");
        // faire apparaître le contenu de la page d'accueil
        return setTimeout(function () {
          contactLink.classList.add("animli");
          return setTimeout(function () {
            return setTimeout(function () {
              logo.classList.remove("opac");
              return setTimeout(function () {
                logo.textContent = "< emk />";
                logo.classList.add("opac");
                addSection("home");
                
              }, 300);
            }, 3000);
          }, 100);
        }, 400);
      }, 300);
    }, 1000);
  }, 3000);
});

logo.addEventListener('click',function(e){
  e.preventDefault;
  addSection("test");
})

const work= document.getElementById('works');
work.addEventListener('click',function(e){
  e.preventDefault;
  addSection("works");
  const worksDiv = document.querySelector(".marginAuto");
  worksDiv.innerHTML="<h1>works<h1>"

})
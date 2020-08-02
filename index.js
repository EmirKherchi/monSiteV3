const welcome = document.getElementById("welcome");
const logo = document.getElementById("logo");

const landingPage = document.getElementById("LandingPage");

const worksLink = document.getElementById("works");
const contactLink = document.getElementById("contact");


//Remove // add section
const addSection = (sectionName) => {
  const getSections = document.querySelector("section");
  getSections.remove();

  const newSection = document.createElement("section");
  const newDiv = document.createElement("div");

  newDiv.classList.add("mainDiv");
  newSection.id = sectionName;
  document.body.appendChild(newSection);
  newSection.appendChild(newDiv);
  newSection.classList.add("pageBase", "zoomIn");
};

//page render

const renderHome = () => {
  const getSections = document.querySelector("section");
  if(getSections.id === "home"){
    console.log("nothing happend");
  }else{
  addSection("home");
  const homeMainDiv = document.querySelector(".mainDiv");
  homeMainDiv.innerHTML = "<h1>Home<h1>";
  }
};
const renderWorks = () => {
  const getSections = document.querySelector("section");
  if(getSections.id === "work"){
    console.log("nothing happend");
  }else{

  addSection("work");
  const workMainDiv = document.querySelector(".mainDiv");
  workMainDiv.innerHTML = "<h1>Work<h1>";
  return "works";

  };
};
const renderContact = () => {
  const getSections = document.querySelector("section");
  if(getSections.id === "contact"){
    console.log("nothing happend");
  }else{
  addSection("contact");
  const contactMainDiv = document.querySelector(".mainDiv");
  contactMainDiv.innerHTML = "<h1>Contact<h1>";
  return "contact"
  };
};

//page loading
window.addEventListener("load", function () {
  setTimeout(function () {
    welcome.classList.add("ZoomOut");
    return setTimeout(function () {
      logo.classList.add("opac");
      return setTimeout(function () {
        worksLink.classList.add("animli");
        return setTimeout(function () {
          contactLink.classList.add("animli");
          return setTimeout(function () {
            return setTimeout(function () {
              logo.classList.remove("opac");
              return setTimeout(function () {
                logo.textContent = "< emk />";
                logo.classList.add("opac");
                renderHome();
              }, 300);
            }, 3000);
          }, 100);
        }, 400);
      }, 300);
    }, 1000);
  }, 3000);
});

//events
logo.addEventListener("click", function (e) {
  e.preventDefault;
  renderHome();  
});



worksLink.addEventListener("click", function (e) {
  e.preventDefault;
  renderWorks();
});

contactLink.addEventListener("click", function (e) {
  e.preventDefault;
  renderContact();
});

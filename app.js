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

//pages render

const renderHome = () => {
  const getSections = document.querySelector("section");
  if (getSections.id === "home") {
    console.log("nothing happend");
  } else {
    addSection("home");
    const homeMainDiv = document.querySelector(".mainDiv");

    const leftSide = document.createElement("div");
    leftSide.id = "home__left";

    const leftSideImg = document.createElement("img");
    leftSideImg.id = "home__left--image";

    homeMainDiv.appendChild(leftSide);

    leftSide.appendChild(leftSideImg);
    leftSideImg.src = "sources/images/home-ill.svg";
    leftSideImg.alt = "illustration emir homepage developpeur web";

    const rightSide = document.createElement("div");
    rightSide.id = "home__right";

    homeMainDiv.appendChild(rightSide);

    const rightSideTitle = document.createElement("h1");
    rightSideTitle.id = "home__right--title";
    rightSide.appendChild(rightSideTitle);
    rightSideTitle.innerHTML =
      "Emir Kherchi - <span>Développeur Front-end Vue.js</span>";

    const rightSideDescription = document.createElement("p");
    rightSideDescription.id = "home__right--description";
    rightSide.appendChild(rightSideDescription);
    rightSideDescription.textContent =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga vitae quam tempora praesentium natus fugiat, assumenda inventore consectetur veritatis officia, sit, quaerat ullam expedita quasi accusamus excepturi! Aut, accusamus iure.";
  }
};
const renderWorks = () => {
  const getSections = document.querySelector("section");
  if (getSections.id === "work") {
    console.log("nothing happend");
  } else {
    addSection("work");
    const workMainDiv = document.querySelector(".mainDiv");
    const allimg = [];
    const allProjectDiv = [];

    //fetch

    fetch("https://us-central1-emk-api.cloudfunctions.net/app/api/read")
      .then(function (response) {
        if (response.status !== 200) {
          console.log("erreur: " + response.status);
        }
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        const projets = data;

        class Job {
          constructor(title, image, description, link) {
            this.title = title;
            this.image = image;
            this.description = description;
            this.link = link;
          }
          render() {
            let titleJob = document.createElement("h2");
            let descriptionJob = document.createElement("p");
            let linkJob = document.createElement("a");
            linkJob.target = "_blank";
            linkJob.innerHTML = "Voir le projet";

            let imageJob = document.createElement("img");

            imageJob.alt =
              "Image représentant le projet de emir développeur web front end";

            imageJob.src = this.image;
            titleJob.innerHTML = this.title;

            descriptionJob.innerHTML = this.description;
            linkJob.href = this.link;

            const projectDiv = document.createElement("div");
            projectDiv.classList.add("projectDiv");
            workMainDiv.appendChild(projectDiv);
            projectDiv.appendChild(imageJob);

            allimg.push(imageJob);
            allProjectDiv.push(document.querySelector(".projectDiv"));
            let elementsJob = [titleJob, imageJob, descriptionJob, linkJob];
            let elementsToRemove = [titleJob,descriptionJob,linkJob]

            imageJob.addEventListener("mouseenter", function () {
              elementsJob.forEach((element) => {
                projectDiv.appendChild(element);
              });
              projectDiv.addEventListener('mouseleave',function(){
                elementsToRemove.forEach((element) => {
                  projectDiv.removeChild(element);
                });
              });
            });
          }
        }

        const thisProjet = projets.map(
          ({ name, imageUrl, description, link }) =>
            new Job(name, imageUrl, description, link)
        );

        //application de la methode de classe pour toutes les instances

        for (let i = 0; i < thisProjet.length; i++) {
          thisProjet[i].render();
        }
      });
  }
};
const renderContact = () => {
  const getSections = document.querySelector("section");
  if (getSections.id === "contact") {
    console.log("nothing happend");
  } else {
    addSection("contact");
    const contactMainDiv = document.querySelector(".mainDiv");
    contactMainDiv.innerHTML = "<h1>Contact<h1>";
  }
};

//page loading
window.addEventListener("load", function () {
  setTimeout(function () {
    welcome.classList.add("ZoomOut");
    return setTimeout(function () {
      logo.classList.add("opac");
      return setTimeout(function () {
        renderHome();
        worksLink.classList.add("animli");
        return setTimeout(function () {
          contactLink.classList.add("animli");
          return setTimeout(function () {
            return setTimeout(function () {
              logo.classList.remove("opac");
              return setTimeout(function () {
                logo.textContent = "< emk />";
                logo.classList.add("opac");
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

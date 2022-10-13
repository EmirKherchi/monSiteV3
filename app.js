const welcome = document.getElementById("welcome");
const logo = document.getElementById("logo");
logo.textContent = "< emk />";
const landingPage = document.getElementById("LandingPage");
const worksLink = document.getElementById("works");
const contactLink = document.getElementById("contact");


const fetchAllProjects = () => {
  fetch("https://us-central1-emk-api.cloudfunctions.net/app/api/read")
    .then(function (response) {
      if (response.status !== 200) {
        console.log("erreur: " + response.status);
      }
      return response.json();
    })
    .then(function (res) {
      const data = res.sort(function (a, b) {
        return (b.id - a.id);
      });
      localStorage.clear();
      localStorage.setItem("projects", JSON.stringify(data));
      console.log('all projects fetch from BDD')
    })
}


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
    leftSide.id = "home__ill";

    const leftSideImg = document.createElement("img");
    leftSideImg.id = "home__ill--image";

    homeMainDiv.appendChild(leftSide);

    leftSide.appendChild(leftSideImg);
    leftSideImg.src = "sources/images/home-ill.svg";
    leftSideImg.alt = "illustration emir homepage developpeur web";

    const rightSide = document.createElement("div");
    rightSide.id = "home__description";

    homeMainDiv.appendChild(rightSide);

    const rightSideTitle = document.createElement("h1");
    rightSideTitle.id = "home__description--title";
    rightSide.appendChild(rightSideTitle);
    rightSideTitle.innerHTML =
      "Emir Kherchi <br> <span>Développeur Front-end Vue.js</span>";

    const rightSideDescription = document.createElement("p");
    rightSideDescription.id = "home__description--text";
    rightSide.appendChild(rightSideDescription);
    rightSideDescription.innerHTML =
      '<span id="home__description--text--title">Bienvenue sur mon portfolio !</span><br>Développeur web spécialisé et passionné JavaScript je vous invite à découvrir mon univers et mon travail, vous pourrez ainsi percevoir une partie de mes projets.<br>Si vous souhaitez discuter et êtes amateur de café, n’hésitez pas à utiliser le formulaire de contact. Bonne visite.';
  }
};
const renderWorks = () => {

  const getSections = document.querySelector("section");

  if (getSections.id === "work") {

    console.log("nothing happend");
  } else {

    addSection("work");
    const workMainDiv = document.querySelector(".mainDiv");
    logo.innerHTML = '<i class="fas fa-angle-left"></i> Accueil';

    //Get projects allready fetch in local storage.

    const projets = JSON.parse(localStorage.getItem("projects"));
    console.log(typeof (projets))

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

        const projectDivStyle = () => {
          projectDiv.style.background = "url(" + imageJob.src + ")";
          projectDiv.style.backgroundRepeat = "no-repeat";
          projectDiv.style.backgroundPosition = "center";
          projectDiv.style.backgroundSize = "cover";
        };

        projectDivStyle();

        let elementsJob = [titleJob, descriptionJob, linkJob];

        elementsJob.forEach((element) => {
          projectDiv.appendChild(element);
          element.classList.add("down");

          projectDiv.addEventListener("mouseenter", function () {
            element.classList.remove("viewProjectDown");
            element.classList.add("viewProjectUp");
            projectDiv.style.background = "url('')";
            linkJob.style.opacity = "1";
          });
          projectDiv.addEventListener("mouseleave", function () {
            element.classList.remove("viewProjectUp");
            element.classList.add("viewProjectDown");
            projectDivStyle();
            linkJob.style.opacity = "0";

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

  }
};

const renderContact = () => {
  const getSections = document.querySelector("section");
  if (getSections.id === "contactPage") {
    console.log("nothing happend");
  } else {
    addSection("contactPage");
    const contactMainDiv = document.querySelector(".mainDiv");
    logo.innerHTML = '<i class="fas fa-angle-left"></i> Accueil';
    const formContact = document.createElement("form");
    formContact.classList.add("form");

    contactMainDiv.appendChild(formContact);

    //création des inputs
    const mainFormDiv = document.createElement("div");
    mainFormDiv.classList.add("id");
    formContact.appendChild(mainFormDiv);

    const labelForm = (labelName, frenchLabelName) => {
      const divLabel = document.createElement("div");
      divLabel.classList.add(labelName);
      mainFormDiv.appendChild(divLabel);

      const label = document.createElement("label");
      label.setAttribute("for", labelName);
      label.textContent = frenchLabelName;

      const input = document.createElement("input");
      input.setAttribute("id", labelName);
      input.setAttribute("type", "text");
      input.setAttribute("name", labelName);

      divLabel.appendChild(label);
      divLabel.appendChild(input);
    };
    labelForm("name", "Nom");
    labelForm("email", "E-mail");
    labelForm("subject", "Sujet");

    //création du text area
    const divLabel = document.createElement("div");
    divLabel.classList.add("content");
    mainFormDiv.appendChild(divLabel);
    const label = document.createElement("label");
    label.setAttribute("for", "content");
    label.textContent = "Message";
    const textArea = document.createElement("textarea");
    textArea.setAttribute("id", "content");
    textArea.setAttribute("type", "text");
    textArea.setAttribute("name", "content");
    textArea.setAttribute("cols", 30);
    textArea.setAttribute("rows", 10);
    divLabel.appendChild(label);
    divLabel.appendChild(textArea);

    //création du button
    const btnForm = document.createElement("button");
    btnForm.textContent = "Envoyer";
    divLabel.appendChild(btnForm);

    //input to check n regex

    const regexLettersOnly = /^[a-zA-Z]+$/;
    const regexEmail = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const content = document.getElementById("content");

    //function send form
    function sendEmail() {
      let thanks = document.createElement("h1");
      Email.send({
        SecureToken: "56be052d-0061-4712-ab5d-449c30d9dade",
        To: "contact@ekherchi.fr",
        From: "contact@ekherchi.fr",
        Subject: "site emk: " + subject.value,
        Body:
          "name: " +
          " " +
          name.value +
          "<br> " +
          "email: " +
          " " +
          email.value +
          "<br> " +
          "message: " +
          " " +
          content.value,
      }).then(
        (thanks.innerHTML =
          "<h2>Votre message est bien envoyé.<br>Merci !</h2>"),
        formContact.remove(),
        contactMainDiv.appendChild(thanks)
      );
    }
    function checkInput() {
      if (regexLettersOnly.test(name.value) == false) {
        alert("Veuillez informer votre Nom");
        name.classList.add('inputError');
      } else {
        name.classList.remove('inputError');
        if (regexEmail.test(email.value) == false) {
          alert("Veuillez renseigner votre adresse Email");
          email.classList.add('inputError');
        } else {
          email.classList.remove('inputError');
          sendEmail();
        }
      }
    }

    btnForm.addEventListener("click", function (e) {
      e.preventDefault();
      checkInput();
    });

    const divSocialMedia = document.createElement("div");
    divSocialMedia.classList.add("socialDiv");
    contactMainDiv.appendChild(divSocialMedia);

    const gitIcon = document.createElement("a");
    gitIcon.classList.add("socialDiv__gitIcon");
    gitIcon.innerHTML = '<i class="fab fa-github"></i>';
    gitIcon.target = "_blank";
    gitIcon.href = "https://github.com/EmirKherchi";
    divSocialMedia.appendChild(gitIcon);

    const linkedinIcon = document.createElement("a");
    linkedinIcon.classList.add("socialDiv__linkedinIcon");
    linkedinIcon.innerHTML = '<i class="fab fa-linkedin"></i>';
    linkedinIcon.target = "_blank";
    linkedinIcon.href = "https://www.linkedin.com/in/emir-kherchi/";
    divSocialMedia.appendChild(linkedinIcon);
  }
};

const fadeOutMainDiv = (oldSectionName) => {
  const oldSection = document.querySelector("section");
  if (oldSection.id === oldSectionName) {
    console.log("nothing happend");
  } else {
    oldSection.classList.add("fadeOut");
  }
};

//page loading
window.addEventListener("load", function () {
  setTimeout(function () {
    fetchAllProjects();
    welcome.classList.add("ZoomOut");
    return setTimeout(function () {
      logo.classList.add("opac");
      return setTimeout(function () {
        renderHome();
        worksLink.classList.add("animli");
        return setTimeout(function () {
          contactLink.classList.add("animli");
        }, 400);
      }, 300);
    }, 1000);
  }, 3000);
});

//events
logo.addEventListener("click", function (e) {
  e.preventDefault();
  fadeOutMainDiv("home");
  setTimeout(function () {
    renderHome();
  }, 600);
  logo.textContent = "< emk />";
});

worksLink.addEventListener("click", function (e) {
  e.preventDefault();
  fadeOutMainDiv("work");
  setTimeout(function () {
    renderWorks();
  }, 600);
});

contactLink.addEventListener("click", function (e) {
  e.preventDefault();
  fadeOutMainDiv("contactPage");
  setTimeout(function () {
    renderContact();
  }, 600);
});

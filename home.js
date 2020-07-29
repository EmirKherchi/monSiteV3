const mainTag = document.getElementById("home");

const jobsDiv = document.getElementById("jobs");

mainTag.animate(
  [
    {
      // from
      opacity: 0,
    },
    {
      // to
      opacity: 1,
    },
  ],
  3000
);

class Job {
  constructor(title, image, description, link) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.link = link;
  }
  render() {
    let titleJob = document.createElement("h3");
    let imageJob = document.createElement("img");
    let descriptionJob = document.createElement("p");
    let linkJob = document.createElement("a");

    titleJob.innerHTML = this.title;
    imageJob.src = this.image;
    descriptionJob.innerHTML = this.description;
    linkJob.href = this.link;
    linkJob.textContent = this.link;

    let elementsJob = [titleJob, imageJob, descriptionJob, linkJob];

    elementsJob.forEach((element) => {
      jobsDiv.appendChild(element);
    });
  }
}

const cv = new Job(
  "Cv",
  "none",
  "Mon cv en ligne responsive et disponible à tout moment",
  "https://emircv.netlify.app/"
);

const vrShop = new Job(
  "Vr Shop",
  "none",
  "Site vitrine pour espace de jeux en réalité virtuel",
  "https://vrshop.netlify.app/"
);

const supaMug = new Job(
  "Supa mug",
  "none",
  "Site vitrine pour mug originaux et personalisable",
  "https://supamug.netlify.app/"
);

const jobs = [cv, vrShop, supaMug];

jobs.forEach((element) => {
  element.render();
});

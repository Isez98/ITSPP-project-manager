const { ipcRenderer } = require("electron");

const proyectBtn = document.querySelector("#proyectBtn");

const proyectName = document.querySelector("#proyectName");
const releaseDate = document.querySelector("#releaseDate");
const startDate = document.querySelector("#startDate");
const conclusionDate = document.querySelector("#conclusionDate");
const typeProyect = document.querySelector("#typeProyect");
const objectiveProject = document.querySelector("#objectiveProject");
const statusProject = document.querySelector("#statusProject");
const projectComment = document.querySelector("#projectComment");
const enterpriseProject = document.querySelector("#enterpriseProject");
const enterpriseContact = document.querySelector("#enterpriseContact");
const firstNameContact = document.querySelector("#firstNameContact");
const lastNameContact = document.querySelector("#lastNameContact");

proyectBtn.addEventListener("click", async e => {
    e.preventDefault();
  
    const proyect = {
        proyectName: proyectName.value,
        releaseDate: releaseDate.value,
        startDate: startDate.value,
        conclusionDate: conclusionDate.value,
        typeProyect: typeProyect.value,
        objectiveProject: objectiveProject.value,
        statusProject: statusProject.value,
        projectComment: projectComment.value,
        enterpriseProject: enterpriseProject.value,
        enterpriseContact: enterpriseContact.value,
        firstNameContact: firstNameContact.value,
        lastNameContact: lastNameContact.value
    };
  
    ipcRenderer.send("new-proyect", proyect);
  });
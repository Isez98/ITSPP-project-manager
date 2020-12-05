const { ipcRenderer } = require("electron");

const proyectBtn = document.querySelector("#proyectBtn");
const deleteBtn = document.querySelector("#deleteBtn");


//sessionStorage
var idToSend = sessionStorage.getItem("idToSend");
console.log(idToSend);

let updateStatus = false;
let idProyectToUpdate = '';

window.onload = function() {
    editProyect();
};

let proyectsList = [];

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
  
    if (!updateStatus) {
        ipcRenderer.send("new-proyect", proyect);
        alert("Proyect Created Successfully");
    } else {
        ipcRenderer.send("update-proyect", { ...proyect, idProyectToUpdate });
    }

});
  
function deleteProyect(){
    const result = confirm('Seguro que desea eliminar el Proyecto actual del sistema?');
    if (result) {
        ipcRenderer.send('delete-proyect', idToSend);
        sessionStorage.clear();
    }
    return;
}

function editProyect(){
    updateStatus = true;
    idProyectToUpdate = idToSend;
    const proyect = proyects.find(proyect => proyect._id === idProyectToUpdate);
    proyectName.value = proyect.proyectName;
    releaseDate.value = proyect.releaseDate;
    startDate.value = proyect.startDate;
    conclusionDate.value = proyect.conclusionDate;
    typeProyect.value = proyect.typeProyect;
    objectiveProject.value = proyect.objectiveProject;
    statusProject.value = proyect.statusProject;
    projectComment.value = proyect.projectComment;
    enterpriseProject.value = proyect.enterpriseProject;
    enterpriseContact.value = proyect.enterpriseContact;
    firstNameContact.value = proyect.firstNameContact;
    lastNameContact.value = proyect.lastNameContact;
}


ipcRenderer.on('delete-proyect-success', (e,arg) => {
    const deletedProyect = JSON.parse(arg);
    
})


ipcRenderer.send('get-proyects');

ipcRenderer.on('get-proyects', (e,arg) =>{
    const proyectsReceived = JSON.parse(arg);
    proyects = proyectsReceived;
    proyectsList = proyectsReceived;
    editProyect(proyects);
});

ipcRenderer.on("update-proyect-success", (e, args) => {
    updateStatus = false;
    const updatedProyect = JSON.parse(args);
    proyects = proyectsList.map((t, i) => {
      if (t._id === updatedProyect._id) {
        t.proyectName = updatedProyect.proyectName;
        t.releaseDate = updatedProyect.releaseDate;
        t.startDate = updatedProyect.startDate;
        t.conclusionDate = updatedProyect.conclusionDate;
        t.typeProyect = updatedProyect.typeProyect;
        t.objectiveProject = updatedProyect.objectiveProject;
        t.statusProject = updatedProyect.statusProject;
        t.projectComment = updatedProyect.projectComment;
        t.enterpriseProject = updatedProyect.enterpriseProject;
        t.enterpriseContact = updatedProyect.enterpriseContact;
        t.firstNameContact = updatedProyect.firstNameContact;
        t.lastNameContact = updatedProyect.lastNameContact;
      }
      return t;
    });
  });

  
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

  //Functions to add a field
$(function() {
  $(document).on('click', '.btn-add-student', function(e) {
    e.preventDefault();  
    let dynaForm = $('.dynamic-wrap-student form:first');
    let currentEntry = $(this).parents('.entry-student:first');
    let newEntry = $(currentEntry.clone()).appendTo(dynaForm);  
    newEntry.find('input').val('');
    dynaForm.find('.entry-student:not(:last) .btn-add-student')
      .removeClass('btn-add-student').addClass('btn-remove')
      .removeClass('btn-success').addClass('btn-danger')
      .html('<i class="fas fa-minus"></i>');
  }).on('click', '.btn-remove', function(e) {
    $(this).parents('.entry-student:first').remove();  
    e.preventDefault();
    return false;
  });
});

$(function() {
  $(document).on('click', '.btn-add-teacher', function(e) {
    e.preventDefault();  
    let dynaForm = $('.dynamic-wrap-teacher form:first');
    let currentEntry = $(this).parents('.entry-teacher:first');
    let newEntry = $(currentEntry.clone()).appendTo(dynaForm);  
    newEntry.find('input').val('');
    dynaForm.find('.entry-teacher:not(:last) .btn-add-teacher')
      .removeClass('btn-add-teacher').addClass('btn-remove')
      .removeClass('btn-success').addClass('btn-danger')
      .html('<i class="fas fa-minus"></i>');
  }).on('click', '.btn-remove', function(e) {
    $(this).parents('.entry-teacher:first').remove();  
    e.preventDefault();
    return false;
  });
});

$(function() {
  $(document).on('click', '.btn-list', function(e){
    e.preventDefault();

    //Student Object Generator
    const studentEntries = $('.entry-student').map(function(){
      return [[this.querySelector('.studentName').value, this.querySelector('.studentId').value]]
    }).get();
    const studentObjectEntries = Object.assign({}, studentEntries);

    //Teacher Object Generator
    const teacherEntries = $('.entry-teacher').map(function(){
      return [[this.querySelector('.teacherName').value, this.querySelector('.teacherId').value, this.querySelector('.teacherSubject').value]]
    }).get();
    const teacherObjectEntries = Object.assign({}, teacherEntries);

    console.log(studentObjectEntries);
    console.log(teacherObjectEntries);
  } );
});
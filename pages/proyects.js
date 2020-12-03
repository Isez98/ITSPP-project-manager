const { ipcRenderer } = require("electron");

const dataTable = document.querySelector('#dataTable');

function renderProyects(proyects){
    dataTable.innerHTML = '';
    let table = `
        <table class="table dataTable my-0 table-hover" id="dataTable">
        <thead>
            <tr>
                <th>Proyecto</th>
                <th>Fecha de inicio</th>
                <th>Tipo de proyecto</th>
                <th>Empresa</th>
                <th>Objetivo</th>
                <th>Estatus</th>
            </tr>
        </thead>
        <tbody>
    
    `;
    proyects.map(t => {
        table = table +
        `<tr>
          <td>${t.proyectName}</td>
          <td>${t.startDate}</td>
          <td>${t.typeProyect}</td>
          <td>${t.enterpriseProject}</td>
          <td>${t.objectiveProject}</td>
          <td>${t.statusProject}</td>
         </tr>`
    })
        table = table +
    `</tbody>
    </table>`
    ;

    dataTable.innerHTML = table;
}

ipcRenderer.send('get-proyects');

ipcRenderer.on('get-proyects', (e,arg) =>{
    const proyects = JSON.parse(arg);
    renderProyects(proyects);
    console.log(proyects);
});
const { ipcRenderer } = require("electron");

const profileBtn = document.querySelector("#profileBtn");
const userName = document.querySelector("#userName");
const email = document.querySelector("#email");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const academy = document.querySelector("#academy");
const employeeNumber = document.querySelector("#employeeNumber");


profileBtn.addEventListener("click", async e => {
    console.log("antes");
    e.preventDefault();
  
    const user = {
        userName: userName.value,
        email: email.value,
        firstName: firstName.value,
        lastName: lastName.value,
        academy: academy.value,
        employeeNumber: employeeNumber.value,
    };
  
    ipcRenderer.send("new-user", user);
    console.log("despues");
  });

  
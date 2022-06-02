const nombre = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const apellido = document.getElementById("apellido");
const parrafo=document.getElementById("warning")

const form = document.getElementById("form");
form.addEventListener("submit", e => {
    e.preventDefault(); 
    parrafo.innerHTML="";   
    warning = "";
    entrar = false;
    if (nombre.value.length < 6) {
        warning +=`Nombre no válido <br>`
        entrar = true
    }

    if (phone.value.length < 8) {
        warning +=`Número de teléfono no válido <br>`
        entrar = true
    }


    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if (!mailformat.test(email.value)) {
        warning += `Email no válido <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML=warning
    }
})

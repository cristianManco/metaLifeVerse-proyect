const enviarContact = document.getElementById('enviarContact');
const inputEmail = document.getElementById('inputEmail4');
const text = document.getElementById('floatingTextarea2');

enviarContact.addEventListener('submit', msj);

function msj(){
    console.log("Enviado correctamente");

    const inquietud = {
        email: inputEmail.value,
        text: text.value
    }

    console.log(inquietud);
}
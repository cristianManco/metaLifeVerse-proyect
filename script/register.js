const form = document.querySelector('#formRegister');
const userName = document.querySelector('#inputName');
const userEmail = document.querySelector('#inputEmail');
const userPassword = document.querySelector('#inputPassword');
const userPasswordConfirm = document.querySelector('#inputPasswordConfirm');
const userAge = document.querySelector('#inputAge');
const userPhone = document.querySelector('#inputPhone');
const userGenre = document.querySelector('#selectGenre')
const botonRegistro = document.querySelector('#btnRegister');

//Selectores y variables globales
const ID = Date.now();
const URL = "http://localhost:3000/users";

form.addEventListener("submit", (elemento) => {
  elemento.preventDefault();

  createUser();
});

async function createUser() {
  //Validar la información
  if (!validatePassword()) {
    showAlert("La contraseña no es valida.");
    return;
  }
  //Validar que el email no esté registrado
  if (await validateEmail()) {
    showAlert("El correo es invalido.");
    return;
  }

  //validador del tipo de sangre
  if (!bloodConfig()) {
    showAlert("No se seleciono el genero.");
    return;
  }

  const user = {
    id: ID,
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
    age: userAge.value,
    phone: userPhone.value,
    genre: userGenre.value,
  };
  await showHappy(`El login a salido exitoso ${userName.value}`);
  try {
    //Crear al usuario

    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    window.location.href = "./login.html";
  } catch (error) {
    showAlert("Ocurrió un error al crear el usuario.");
  }
}

function showAlert(msg) {
  Swal.fire({
    title: "Error!",
    text: msg,
    icon: "error",
    showConfirmButton: false,
    timer: 4000,
    toast: "true",
    position: "bottom-left",
  });
}

async function showHappy(surccess) {
  await Swal.fire({
    title: "Good job!",
    text: surccess,
    icon: "success",
  });
}

function validatePassword() {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

  //Validar que las dos contraseñas sean iguales, tengan una minima longitud de 6 caracteres y tengan un caracter especial
  return userPassword.value === userPasswordConfirm.value && regex.test(userPassword.value);
}

function bloodConfig() {
  return userGenre.value != "";
}

async function validateEmail() {
  try {
    //
    const response = await fetch(`${URL}?email=${userEmail.value}`);

    const data = await response.json();
    //Si data tiene elementos quiere decir que el email ya está registrado
    console.log(data);
    return data.length;
  } catch (error) {
    return false;
  }
}





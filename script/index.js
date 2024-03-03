
// insertando dinamicamente el menu estactico de las redes

const crear1 = document.createElement('div');
const nuevo1 = document.querySelector('.align-content-center');

crear1.innerHTML =`

    <div class="fixed-bottom">
        <div class="sidebar" style="background-color: rgba(4, 16, 20, 0.376); margin-left: auto; border-radius: 3%;">
            <ul style="display: flex; flex-direction: column; justify-content:center; gap: 15px;">
                <li><a href="https://WhatsApp.com"><img src="images/wredes2.png" width="40px" height="40px" alt="ws-logo"></a></li> 
                <li><a href="https://facebook.com"><img src="images/Fredes1.png" width="40px" height="40px" alt="fb-logo"></a></li> 
                <li><a href="https://twitter.com"><img src="images/tredes1.png" width="40px" height="40px" alt="twitter-logo"></a></li> 
                <li><a href="https://instagram.com"><img src="images/iredes5.png" width="40px" height="40px" alt="instagram-logo"></a></li> 
                <!-- Agrega más redes sociales según sea necesario -->
            </ul>
        </div>
    </div>
`;
nuevo1.appendChild(crear1);

//Modal como te sientes

const btn_comoTeSientes = document.querySelector('.align-content-center');
const infoComoTeSientes = document.createElement('div');

infoComoTeSientes.innerHTML = `
<div class="modal" tabindex="-1" id="modal_comoTeSientes">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label for="customRange3" class="form-label">¿Como es tu estado animo en un escala de 0 a 5?. Siendo 0 Muy infeliz y 5 Realmente muy feliz <br>

        <ul class="numeros-rangos">
            <li>0</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        </label>

        <input type="range" class="form-range" min="0" max="5" step="1" value="0" id="customRange">

        <label for="customRange3" class="form-label">¿Cuanta ansiedad has estado experimentando ultimamente?. Siendo 0 nada y 5 Mucha ansiedad<br>

        <ul class="numeros-rangos">
            <li>0</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        </label>

        <input type="range" class="form-range" min="0" max="5" step="1" value="0" id="customRange1">

        <label for="customRange3" class="form-label">¿Qué tan satisfecho te sientes con tu vida en este momento?. Siendo 0 Nada motivado y 5 Muy motivado <br>

        <ul class="numeros-rangos">
            <li>0</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        </label>

        <input type="range" class="form-range" min="0" max="5" step="1" value="0" id="customRange2">

        <label for="customRange3" class="form-label">¿Cuanto te afecta tu nivel de estrés en tu vida diaria?. Siendo 0 Nada estresante y 5 Muy estresante <br>

        <ul class="numeros-rangos">
            <li>0</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        </label>

        <input type="range" class="form-range" min="0" max="5" step="1" value="0" id="customRange3">

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" id="resultado_pregunta" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#modal_resultado_pregunta">Mirar colaboradores</button>
      </div>
    </div>
  </div>
</div>
`
btn_comoTeSientes.appendChild(infoComoTeSientes);

//Obtener valor de cada rango y mostrarlo en la consola
let sumaFiltro;

const resultado_pregunta_dato_modal = document.querySelector('#resultado_pregunta');
resultado_pregunta_dato_modal.addEventListener('click',capturarDatos);

function capturarDatos() {
  const rangoValor1 = document.querySelector('#customRange');
  const rangoValor2 = document.querySelector('#customRange1');
  const rangoValor3 = document.querySelector("#customRange2");
  const rangoValor4 = document.querySelector("#customRange3");
  
  sumaFiltro = Number(rangoValor1.value) + Number(rangoValor2.value) + Number(rangoValor3.value) + Number(rangoValor4.value)

  console.log(sumaFiltro);


  //Seleccionador de id´s del modal que esta después de aplicar el filtro del modal "Como te sientes"
  const titulo_filtro_modal = document.querySelector('#titulo_filtro_modal');
  const datos_filtro_modal = document.querySelector('#datos_filtro_modal');
  const imagen_filtro_modal = document.querySelector('#imagen_filtro_modal');
  const inyectar_card = document.querySelector('#inyectar_card');
  
  
  //CARD 2

  const url = 'http://localhost:3000/';

   if (sumaFiltro <= 4) {
     try {
       fetch(`${url}profesionales`)
     .then (respuesta => {
      return respuesta.json();
     })
     .then (lili => {
      titulo_filtro_modal.textContent = `Profesional: ${lili.name}`;
      datos_filtro_modal.textContent = `Edad: ${lili.edad}`
      imagen_filtro_modal.src = `${lili.imagen}`
     })
     } catch (error) {
      console.log(error);
     } 

   } else if (sumaFiltro <= 12) {
    try {
      fetch(`${url}profesionales`)
    .then (respuesta => {
     return respuesta.json();
    })
    .then (lili => {
      console.log(lili.name);
      titulo_filtro_modal.textContent = `Profesional: ${lili.name}`;
      datos_filtro_modal.textContent = `Edad: ${lili.edad}`
      imagen_filtro_modal.src = `${lili.imagen}`
    })
    } catch (error) {
     console.log(error);
    }; 


    try {
      const url = 'http://localhost:3000/';
      fetch(`${url}colaboradores`)
    .then (respuesta => {
     return respuesta.json();
    })
    .then (colaborador => { //CARD 1 COLABORADORES
      inyectar_card.children[1];
      inyectar_card.innerHTML += ` 
      <div id="contenido_principal" class="card" style="width: 18rem;">
        <img id="imagen_filtro_modal1" src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 id="titulo_filtro_modal1" class="card-title"></h5>
          <p id="datos_filtro_modal1" class="card-text"></p>
          <a href="https://decentraland.org/" class="btn btn-primary">Ir a la cita</a>
        </div>
      </div>
      `
      const titulo_filtro_modal1 = document.querySelector('#titulo_filtro_modal1');
      const imagen_filtro_modal1 = document.querySelector('#imagen_filtro_modal1');
      const datos_filtro_modal1 = document.querySelector('#datos_filtro_modal1');

      
      titulo_filtro_modal1.textContent = `Colaborador: ${colaborador[0].name}`;
      datos_filtro_modal1.textContent = `Edad: ${colaborador[0].edad}`
      imagen_filtro_modal1.src = `${colaborador[0].imagen}`

      //CARD 2 COLABORADORES

      inyectar_card.children[2];
      inyectar_card.innerHTML += ` 
      <div id="contenido_principal" class="card" style="width: 18rem;">
        <img id="imagen_filtro_modal2" src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 id="titulo_filtro_modal2" class="card-title"></h5>
          <p id="datos_filtro_modal2" class="card-text"></p>
          <a href="https://decentraland.org/" class="btn btn-primary">Ir a la cita</a>
        </div>
      </div>
      `
      const titulo_filtro_modal2 = document.querySelector('#titulo_filtro_modal2');
      const imagen_filtro_modal2 = document.querySelector('#imagen_filtro_modal2');
      const datos_filtro_modal2 = document.querySelector('#datos_filtro_modal2');

      
      titulo_filtro_modal2.textContent = `Colaborador: ${colaborador[1].name}`;
      datos_filtro_modal2.textContent = `Edad: ${colaborador[1].edad}`
      imagen_filtro_modal2.src = `${colaborador[1].imagen}`

      //CARD 3 COLABORADORES 

      inyectar_card.children[3];
      inyectar_card.innerHTML += ` 
      <div id="contenido_principal" class="card" style="width: 18rem;">
        <img id="imagen_filtro_modal3" src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 id="titulo_filtro_modal3" class="card-title"></h5>
          <p id="datos_filtro_modal3" class="card-text"></p>
          <a href="https://decentraland.org/" class="btn btn-primary">Ir a la cita</a>
        </div>
      </div>
      `
      const titulo_filtro_modal3 = document.querySelector('#titulo_filtro_modal3');
      const imagen_filtro_modal3 = document.querySelector('#imagen_filtro_modal3');
      const datos_filtro_modal3 = document.querySelector('#datos_filtro_modal3');

      
      titulo_filtro_modal3.textContent = `Colaborador: ${colaborador[2].name}`;
      datos_filtro_modal3.textContent = `Edad: ${colaborador[2].edad}`
      imagen_filtro_modal3.src = `${colaborador[2].imagen}`

      //CARD 4 COLABORADORES

      inyectar_card.children[2];
      inyectar_card.innerHTML += ` 
      <div id="contenido_principal" class="card" style="width: 18rem;">
        <img id="imagen_filtro_modal4" src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 id="titulo_filtro_modal4" class="card-title"></h5>
          <p id="datos_filtro_modal4" class="card-text"></p>
          <a href="https://decentraland.org/" class="btn btn-primary">Ir a la cita</a>
        </div>
      </div>
      `
      const titulo_filtro_modal4 = document.querySelector('#titulo_filtro_modal4');
      const imagen_filtro_modal4 = document.querySelector('#imagen_filtro_modal4');
      const datos_filtro_modal4 = document.querySelector('#datos_filtro_modal4');

      
      titulo_filtro_modal4.textContent = `Colaborador: ${colaborador[3].name}`;
      datos_filtro_modal4.textContent = `Edad: ${colaborador[3].edad}`
      imagen_filtro_modal4.src = `${colaborador[3].imagen}`
      
    })
    } catch (error) {
     console.log(error);
    } 

   } else if (sumaFiltro <= 20) {
    try {
      const url = 'http://localhost:3000/';
      fetch(`${url}colaboradores`)
    .then (respuesta => {
     return respuesta.json();
    })
    .then (colaborador => { //CARD 1 COLABORADORES
      inyectar_card.children[0];
      inyectar_card.innerHTML = ` 
      <div id="contenido_principal" class="card" style="width: 18rem;">
        <img id="imagen_filtro_modal1" src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 id="titulo_filtro_modal1" class="card-title"></h5>
          <p id="datos_filtro_modal1" class="card-text"></p>
          <a href="https://decentraland.org/" class="btn btn-primary">Ir a la cita</a>
        </div>
      </div>
      `
      const titulo_filtro_modal1 = document.querySelector('#titulo_filtro_modal1');
      const imagen_filtro_modal1 = document.querySelector('#imagen_filtro_modal1');
      const datos_filtro_modal1 = document.querySelector('#datos_filtro_modal1');

      
      titulo_filtro_modal1.textContent = `Colaborador: ${colaborador[0].name}`;
      datos_filtro_modal1.textContent = `Edad: ${colaborador[0].edad}`
      imagen_filtro_modal1.src = `${colaborador[0].imagen}`

      //CARD 2 COLABORADORES

      inyectar_card.children[2];
      inyectar_card.innerHTML += ` 
      <div id="contenido_principal" class="card" style="width: 18rem;">
        <img id="imagen_filtro_modal2" src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 id="titulo_filtro_modal2" class="card-title"></h5>
          <p id="datos_filtro_modal2" class="card-text"></p>
          <a href="https://decentraland.org/" class="btn btn-primary">Ir a la cita</a>
        </div>
      </div>
      `
      const titulo_filtro_modal2 = document.querySelector('#titulo_filtro_modal2');
      const imagen_filtro_modal2 = document.querySelector('#imagen_filtro_modal2');
      const datos_filtro_modal2 = document.querySelector('#datos_filtro_modal2');

      
      titulo_filtro_modal2.textContent = `Colaborador: ${colaborador[1].name}`;
      datos_filtro_modal2.textContent = `Edad: ${colaborador[1].edad}`
      imagen_filtro_modal2.src = `${colaborador[1].imagen}`

      //CARD 3 COLABORADORES 

      inyectar_card.children[3];
      inyectar_card.innerHTML += ` 
      <div id="contenido_principal" class="card" style="width: 18rem;">
        <img id="imagen_filtro_modal3" src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 id="titulo_filtro_modal3" class="card-title"></h5>
          <p id="datos_filtro_modal3" class="card-text"></p>
          <a href="https://decentraland.org/" class="btn btn-primary">Ir a la cita</a>
        </div>
      </div>
      `
      const titulo_filtro_modal3 = document.querySelector('#titulo_filtro_modal3');
      const imagen_filtro_modal3 = document.querySelector('#imagen_filtro_modal3');
      const datos_filtro_modal3 = document.querySelector('#datos_filtro_modal3');

      
      titulo_filtro_modal3.textContent = `Colaborador: ${colaborador[2].name}`;
      datos_filtro_modal3.textContent = `Edad: ${colaborador[2].edad}`
      imagen_filtro_modal3.src = `${colaborador[2].imagen}`

      //CARD 4 COLABORADORES

      inyectar_card.children[2];
      inyectar_card.innerHTML += ` 
      <div id="contenido_principal" class="card" style="width: 18rem;">
        <img id="imagen_filtro_modal4" src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 id="titulo_filtro_modal4" class="card-title"></h5>
          <p id="datos_filtro_modal4" class="card-text"></p>
          <a href="https://decentraland.org/" class="btn btn-primary">Ir a la cita</a>
        </div>
      </div>
      `
      const titulo_filtro_modal4 = document.querySelector('#titulo_filtro_modal4');
      const imagen_filtro_modal4 = document.querySelector('#imagen_filtro_modal4');
      const datos_filtro_modal4 = document.querySelector('#datos_filtro_modal4');

      
      titulo_filtro_modal4.textContent = `Colaborador: ${colaborador[3].name}`;
      datos_filtro_modal4.textContent = `Edad: ${colaborador[3].edad}`
      imagen_filtro_modal4.src = `${colaborador[3].imagen}`
      
    })
    } catch (error) {
     console.log(error);
    } 
   }
};

// console.log(sumaFiltro);

//Modal resultado del filtro

const resultado_pregunta = document.querySelector('.align-content-center');
const resultado_pregunta_info = document.createElement('div');

resultado_pregunta_info.innerHTML = `
<div class="modal fade" id="modal_resultado_pregunta" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div id="inyectar_card" class="modal-body">
          <div class="card" style="width: 18rem;">
              <img id="imagen_filtro_modal" src="..." class="card-img-top" alt="...">
              <div id="contenido_modal_filtro" class="card-body">
                <h5 id="titulo_filtro_modal" class="card-title"></h5>
                <p id="datos_filtro_modal" class="card-text"></p>
                <a href="https://decentraland.org/" class="btn btn-primary">Ir a la cita</a>
              </div>
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
`
resultado_pregunta.appendChild(resultado_pregunta_info);




//   paso 2
//  carousel desde javascript



const url = "http://localhost:3000";
const userId = document.querySelector("#userId");
const card = document.querySelector("#column");

document.addEventListener("DOMContentLoaded", () => {
    redererAccesores();
});

document.body.addEventListener("click", (event) => {
    console.log(event.target);
    if (event.target.classList.contains("btn-delete")) {
        const id = event.target.getAttribute("userId");
        //    console.log(id);
        deleteAccesores(id);
    }
    if (event.target.classList.contains("btn-editar")) {
    }
});

async function getAccesores() {
    const response = await fetch(`${url}/asesores`);
    const data = response.json();

    return data;
}

async function createAccesores(user) {
    await fetch(`${url}/asesores`, {
        method: "POST",
        Headers: {
            "content-Type": "application/JSON",
        },
        body: JSON.stringify(user),
    });
}

async function deleteAccesores(id) {
    await fetch(`${url}/asesores/${id}`, {
        method: "DELETE",
    });
}

async function updateAccesores(id, user) {
    await fetch(`${url}/asesores/${id}`, {
        method: "PUT",
        Headers: {
            "content-Type": "application/JSON",
        },
        body: JSON.stringify(user),
    });
}

async function redererAccesores() {
    const accesores = await getAccesores();

    accesores.forEach((user) => {
        card.innerHTML += `


        <div class="col">
            <div class="card" style="width: 18rem;background-color:rgb(1, 4, 22);margin-top: 40px;">
                <h3 class="card-title" style="color:#ffffff;">Nombre: ${user.nombre}</h3>
                <img src="${user.imagen}" class="card-img-top" width="200" height="204" alt="...">
                <div class="card-body">
                    <p class="card-text" style="font-size:14px;">codigo: ${user.id}</p>
                </div>
                <ul class="list-group list-group-flush" style="font-size:14px;">
                    <li class="list-group-item" style="background-color:rgb(1, 4, 22);">edad: ${user.edad}</li>
                    <li class="list-group-item" style="background-color:rgb(1, 4, 22);">2. A second item</li>
                    <li class="list-group-item" style="background-color:rgb(1, 4, 22);">3. A third item</li>
                </ul>

                <div class="card-body">
                    <p class="card-text" style="font-size:14px;">Some quick example shoppe.</p>
                    <a type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                        Contactar
                    </a>
            
                </div>

            </div>
        </div>


    `;
    });
}






// fin 















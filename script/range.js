const customRange = document.getElementById('customRange3');

const valorRango = customRange.value;
console.log(valorRango);

customRange.addEventListener('input', mostrarMsj)

function mostrarMsj(){
    if (valorRango >= 3){
        alert("¡Nos alegra que te encuentres bien el día de hoy!")
    }else if (valorRango < 3){
        alert("¡Lamentamos saber esto, tienes a tu disposición a cualquiera de nuestros colaboradores!")
    }
}




document.getElementById("boton").addEventListener('click', validar)

function validar() {
    let valide = document.getElementById('edad').value; 
    if (valide < 18) {
        alert('sos menor')
    }
    else{
        alert('aceptado')
    }
}

// para cambiar de color un formulario en tiempo real
document.getElementById("age").addEventListener("input", saludar);

function saludar(event) {
    console.log(event)
    console.log(event.target.value)
    if(event.target.value > 18){
        event.target.style.background = 'green';
        console.log("podes entrar")
    }else{
        event.target.style.background = 'red';
        console.log("te falta cancha pibe")
    }
}

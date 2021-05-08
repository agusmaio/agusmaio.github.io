// let entrada = prompt("Como te llamas?");
// while (entrada != "") {
//   let salida =
//     "Hola " +
//     entrada +
//     "!!" +
//     " " +
//     "Bienvenido a iPhoneFamilyArg, tenemos los mejores productos Apple para vos!";
//   alert(salida);
//   let elegirIphone = prompt("Que iPhone estas buscando?");
//   let colorIphone = prompt("Tu color favorito?");
//   switch (colorIphone) {
//     case "rojo":
//       alert("Perfecto, tenemos rojo!");
//       break;
//     case "azul":
//       alert("Perfecto, tenemos azul!");
//       break;
//     case "verde":
//       alert("Perfecto, tenemos verde!");
//       break;
//     case "amarillo":
//       alert("Perfecto, tenemos amarillo!");
//       break;
//     default:
//       alert(
//         "No tenemos ese color disponible, te ofrecemos rojo/azul/verde/amarillo"
//       );
//       break;
//   }
//   let cantidadIphone = prompt("Cuantos querias?");
//   for (let i = 1; i <= 2; i++) {
//     alert("Agregamos tu pedido al carrito");
//     let otroProducto = prompt("Deseas algun otro producto?");
//     if (otroProducto == "no") {
//       break;
//     }

//     let elegirIphone = prompt("Que iPhone estas buscando?");
//     let colorIphone = prompt("Tu color favorito?");
//     switch (colorIphone) {
//       case "rojo":
//         alert("Perfecto, tenemos rojo!");
//         break;
//       case "azul":
//         alert("Perfecto, tenemos azul!");
//         break;
//       case "verde":
//         alert("Perfecto, tenemos verde!");
//         break;
//       case "amarillo":
//         alert("Perfecto, tenemos amarillo!");
//         break;
//       default:
//         alert(
//           "No tenemos ese color disponible, te ofrecemos rojo/azul/verde/amarillo"
//         );
//         break;
//     }
//     let cantidadIphone = prompt("Cuantos querias?");
//     if (cantidadIphone <= 5) {
//       alert("Agregamos al carrito tu pedido");
//     } else {
//       alert("Disculpa, no tenemos el stock indicado");
//     }
//     entrada = prompt("Como te llamas?");
//   }
// }

//mensaje de bienvenida para titulo
window.onload = () => {
  // const titulo = document.getElementById("titulo-iphone");
  // const usuario = prompt("Hola, ingresa tu nombre");
  // titulo.innerHTML = `Bienvenido ${usuario}, elegi tu iPhone!`;

  let carrito = [];
  let totalCarrito = 0;
  let precio = 0;
  let stock = 0;

  const baseDeDatosProductos = [
    {
      id: 1,
      nombre: "iPhone 12 Pro",
      precio: 1200,
      imagen: "Imagenes/iphone12pro.jpg",
      stock: "2",
    },
    {
      id: 2,
      nombre: "iPhone 12 Pro",
      precio: 1200,
      imagen: "Imagenes/iphone12pro-plata.jpg",
      stock: "2",
    },
    {
      id: 3,
      nombre: "iPhone 12",
      precio: 1000,
      imagen: "Imagenes/iphone12-azul.jpg",
      stock: "2",
    },
    {
      id: 4,
      nombre: "iPhone 12",
      precio: 1000,
      imagen: "Imagenes/iphone12-lima.png",
      stock: "0",
    },
    {
      id: 5,
      nombre: "iPhone 11",
      precio: 750,
      imagen: "Imagenes/iphone11.png",
      stock: "2",
    },
    {
      id: 6,
      nombre: "iPhone SE",
      precio: 550,
      imagen: "Imagenes/iphone-se.jpg",
      stock: "2",
    },
  ]

  let acumulador = ``;

  mostrarProductos(baseDeDatosProductos);
  function mostrarProductos(baseDeDatosProductos) {
    let acumulador = "";

    for (let i = 0; i < baseDeDatosProductos.length; i++) {
      acumulador += `<div class="vendidos-1 vendidos-mac">
  <img src=${baseDeDatosProductos[i].imagen} alt="iphone-12pro" />
  <h3 class="">
    ${baseDeDatosProductos[i].nombre} 
  </h3>
  <h3 class="">${baseDeDatosProductos[i].precio}</h3>
  <div class="div-button-mac">
    <button onclick='agregarCarrito(${baseDeDatosProductos[i].id}, ${baseDeDatosProductos[i].precio}, ${baseDeDatosProductos[i].stock})' type="button" class="button-mac">
      <a>
        Agregar a Carrito<i class="fas fa-shopping-cart"></i>
      </a>
    </button>
  </div>
</div>`
}
document.getElementById("productos").innerHTML = acumulador;

//funcion para agregado de carrito
  function agregarCarrito(id) {
    let productoElegido = baseDeDatosProductos.find((el) => el.id == id);
    carrito.push(productoElegido);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    console.log(carrito);
  }

  //funcion para filtro por nombre.
  const selectFiltro = document.getElementById("select-model");
  function filtrar() {
    let valorfiltro = selectFiltro.value;
    if (valorfiltro == "Todos") {
      mostrarProductos(baseDeDatosProductos);
    } else {
      mostrarProductos(
        baseDeDatosProductos.filter((el) => el.nombre == selectFiltro.value)
      );
    }
  }
  selectFiltro.addEventListener("change", () => {
    filtrar();
  })
}




//Modal carrito
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0] //cero porque devuelve arrays entonces el primero es cero
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]



botonAbrir.addEventListener('click',()=>{
  contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click',()=>{
  contenedorModal.classList.toggle('modal-active')
})
contenedorModal.addEventListener('click', ()=>{
  contenedorModal.classList.remove('modal-active')
})
modalCarrito.addEventListener('click', (event)=>{
  event.stopPropagation()
})


// function mostrarTotal(){
//   console.log(carrito.reduce((acc, el) => acc += el.precio, 0))
// }

// function agregarCarrito(precio, stock, id) {
//   let hayStock = validacionStock(stock);
//   if (hayStock) {
//     totalCarrito = totalCarrito + precio;
//     console.log(`Agregaste producto al carrito. El total es: ${totalCarrito}`);
//     console.log(
//       `El precio final con IVA incluido es: ${sumarIva(totalCarrito)}`
//     );
//     // console.log(`El producto agregado es: ${id}`)
//   }
// }
// function validacionStock(stock) {
//   if (stock > 0) {
//     alert("Tenemos stock");
//     return true;
//   } else {
//     alert("No tenemos stock suficiente de este producto");
//     return false;
//   }
// }
// function sumarIva(totalCarrito) {
//   return totalCarrito * 1.21;
// }

// function calcularCuotas() {
//   let cuotas = prompt("Selecciones cuotas (1,3,6,12)");
//   switch (cuotas) {
//     case "1":
//       console.log("la cuota es:" + sumarIva(totalCarrito) / 1);
//       break;
//     case "3":
//       console.log("la cuota es:" + sumarIva(totalCarrito) / 3);
//       break;
//     case "6":
//       console.log("la cuota es:" + sumarIva(totalCarrito) / 6);
//       break;
//     case "12":
//       console.log("la cuota es:" + sumarIva(totalCarrito) / 12);
//       break;
//     default:
//       alert("No hay plan disponible");
//       break;
//   }
// }
}
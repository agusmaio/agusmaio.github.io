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
// window.onload = () => 
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
  function mostrarProductos(productos) {
    let acumulador = "";
    for (let i = 0; i < productos.length; i++) {
      acumulador += `<div class="vendidos-1 vendidos-mac">
  <img src=${productos[i].imagen} alt="iphone-12pro" />
  <h3 class="">
    ${productos[i].nombre} 
  </h3>
  <h3 class="">${productos[i].precio}</h3>
  <div class="div-button-mac">
    <button onclick='agregarCarrito(${productos[i].id}, ${productos[i].precio}, ${productos[i].stock})' type="button" class="button-mac">
      <a>
        Agregar a Carrito<i class="fas fa-shopping-cart"></i>
      </a>
    </button>
  </div>
</div>`}
    

document.getElementById("productos").innerHTML = acumulador;


  //funcion para filtro por nombre.
  
  function filtrar() {
    const selectFiltro = document.getElementById("select-model");
    let valorFiltro = selectFiltro.value;
    let productosFiltrados = []
    if(valorFiltro == "Todos"){
      productosFiltrados = baseDeDatosProductos
    }
    else{
     productosFiltrados = baseDeDatosProductos.filter((el) => el.nombre == selectFiltro.value)
    }
   mostrarProductos(productosFiltrados)
   }
  $("#select-model").on("change", () => {
    filtrar()
  })
  // selectFiltro.addEventListener("change", () => {
  //   filtrar();
  // })
}


$("#select-fundas").on("change", () => {
  const selectFundas = document.getElementById("select-fundas")
  traerDatos(selectFundas.value)
  })

//funcion para agregado de carrito
function agregarCarrito(id) {
  let productoElegido = baseDeDatosProductos.find((el) => el.id == id);
  carrito.push(productoElegido);

  localStorage.setItem("carrito", JSON.stringify(carrito));

  console.log(carrito);

  actualizarCarrito()
}

//Para eliminar de modal carrito
function eliminarProducto(id){
  let productoAEliminar = carrito.find (el => el.id == id)
  let indice = carrito.indexOf(productoAEliminar)

  carrito.splice(indice, 1)
  console.log(carrito)
  actualizarCarrito()
}

//Para actualizar de modal carrito
function actualizarCarrito() {
  contenedorCarrito.innerHTML= ``

  carrito.forEach( (baseDeDatosProductos) => {
    const div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML = `
                    <p>${baseDeDatosProductos.nombre}</p>
                    <p>Precio: $${baseDeDatosProductos.precio}</p>
                    <button onclick=eliminarProducto(${baseDeDatosProductos.id}) class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`
    
    contenedorCarrito.appendChild(div)
  })

  contadorCarrito.innerText = carrito.length
  precioTotal.innerText = carrito.reduce((acc, el) => acc += el.precio, 0)

}

//Modal carrito
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0] //cero porque devuelve arrays entonces el primero es cero
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')


botonAbrir.addEventListener('click',()=>{
  contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click',()=>{
  contenedorModal.classList.toggle('modal-active')
})
contenedorModal.addEventListener('click', ()=>{
  contenedorModal.classList.remove('modal-active') //puede ser tambien:  botonCerrar.click()
})
modalCarrito.addEventListener('click', (event)=>{
  event.stopPropagation()
})


function traerDatos(busqueda) {
  $.get(
    "https://api.mercadolibre.com/sites/MLA/search?seller_id=568872399&q="+busqueda,
    function (response, status) {
      const results = response.results
      const productosMeli = results.map(element => {
        let aux = {
          title: element.title,
          img: element.thumbnail,
          id: element.id,
          price: element.price,
          stock: element.available_quantity
        }
        return aux;
      })
      let card = "";
      for (let i = 0; i < productosMeli.length; i++) {
        card += `<div class="vendidos-1 vendidos-mac">
    <img src=${productosMeli[i].img} alt="iphone-12pro" />
    <h3 class="">
      ${productosMeli[i].title} 
    </h3>
    <h3 class="">${productosMeli[i].price}</h3>
    <div class="div-button-mac">
      <button onclick='agregarCarrito(${productosMeli[i].id}, ${productosMeli[i].price}, ${productosMeli[i].available_quantity})' type="button" class="button-mac">
        <a>
          Agregar a Carrito<i class="fas fa-shopping-cart"></i>
        </a>
      </button>
    </div>
  </div>`}
  console.log(response, status)
  console.log(productosMeli)
      
  
  $("#producto").html(card);
    }
  )
}

// animaciones jquery

$(".buttonFinalizar").click(function(){
  $("#productos").fadeOut("slow");
}); 




















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

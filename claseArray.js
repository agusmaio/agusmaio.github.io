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
let totalCarrito = 0;
let precio = 0;
let stock = 0;

const baseDeDatosProductos = [
  {
    nombre: "iPhone 12 Pro - Azul Marino",
    precio: "1200",
    imagen: "Imagenes/iphone12pro.jpg",
    stock: "2",
  },
  {
    nombre: "iPhone 12 Pro - Plata",
    precio: "1200",
    imagen: "Imagenes/iphone12pro-plata.jpg",
    stock: "2",
  },
  {
    nombre: "iPhone 12 - Azul",
    precio: "1000",
    imagen: "Imagenes/iphone12-azul.jpg",
    stock: "2",
  },
  {
    nombre: "iPhone 12 - Lima",
    precio: "1000",
    imagen: "Imagenes/iphone12-lima.png",
    stock: "0",
  },
  {
    nombre: "iPhone 11 - Varios",
    precio: "750",
    imagen: "Imagenes/iphone11.png",
    stock: "2",
  },
  {
    nombre: "iPhone SE - Rojo",
    precio: "550",
    imagen: "Imagenes/iphone-se.jpg",
    stock: "2",
  },
];

let acumulador = ``;

for (let i = 0; i < baseDeDatosProductos.length; i++) {
  acumulador += `<div class="vendidos-1 vendidos-mac wow animate__animated animate__backInLeft">
  <img src=${baseDeDatosProductos[i].imagen} alt="iphone-12pro" />
  <h3 class="wow animate__ animate__pulse animated">
    ${baseDeDatosProductos[i].nombre} 
  </h3>
  <h3 class="wow animate__ animate__pulse animated">${baseDeDatosProductos[i].precio}</h3>
  <div class="div-button-mac">
    <button onclick="agregarCarrito(${baseDeDatosProductos[i].precio}, ${baseDeDatosProductos[i].stock})" type="button" class="button-mac">
      <a>
        Agregar a Carrito<i class="fas fa-shopping-cart"></i>
      </a>
    </button>
  </div>
</div>;`;
}
document.getElementById("productos").innerHTML = acumulador;

function agregarCarrito(precio, stock) {
  let hayStock = validacionStock(stock);
  if (hayStock) {
    totalCarrito = totalCarrito + precio;
    console.log(`Agregaste producto al carrito. El total es: ${totalCarrito}`);
    console.log(
      `El precio final con IVA incluido es: ${sumarIva(totalCarrito)}`
    );
  }
}
function validacionStock(stock) {
  if (stock > 0) {
    alert("Tenemos stock");
    return true;
  } else {
    alert("No tenemos stock suficiente de este producto");
    return false;
  }
}
function sumarIva(totalCarrito) {
  return totalCarrito * 1.21;
}

function calcularCuotas() {
  let cuotas = prompt("Selecciones cuotas (1,3,6,12)");
  switch (cuotas) {
    case "1":
      console.log("la cuota es:" + sumarIva(totalCarrito) / 1);
      break;
    case "3":
      console.log("la cuota es:" + sumarIva(totalCarrito) / 3);
      break;
    case "6":
      console.log("la cuota es:" + sumarIva(totalCarrito) / 6);
      break;
    case "12":
      console.log("la cuota es:" + sumarIva(totalCarrito) / 12);
      break;
    default:
      alert("No hay plan disponible");
      break;
  }
}

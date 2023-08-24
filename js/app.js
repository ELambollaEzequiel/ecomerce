const shopContent = document.querySelector(".shop-products");
const verCarrito = document.getElementById("btn-abrir-carrito");
const modalContainer = document.getElementById("modal-container");
const cantProdsCarrito = document.getElementById("cant-prod-cart");

//get item(enviado)
let carrito = JSON.parse(localStorage.getItem("carrito")) || []; //carrito va a ser lo que este en el local storage o vacio si no hay nada cguardado
let totalProd = 0;

let totalCarrito = 0;
let prodEnCarrito = 0;
const toast = (producto) => {
  Toastify({
    text: `${producto.modelo} se agrego al carrito`,
    gravity: "bottom", // `top` or `bottom`
    position: "right",
    duration: 2000,
  }).showToast();
};
const printListaProducts = (arr) => {
  arr.forEach((producto) => {
    let content = document.createElement("div");
    content.innerHTML = `
      <div class="col product-cart " >
      <div class="card " >
      <img src="https://img.freepik.com/free-psd/smartphone-mockup_1310-812.jpg?w=1380&t=st=1692649559~exp=1692650159~hmac=8770b71239435edc69af85f0c358a728df2e424e7935eb34be1983a85588cc39" class="card-img-top" alt="${producto.modelo}">
      <div class="card-body ">
        <h5 class="card-title modelo-prod" id="prod-modelo">${producto.modelo}</h5>
        <p class="card-text h-100 cantidad-prod" id="prod-descripcion">${producto.descripcion}</p>
        <span class="card-text precio-prod" id="precio-unit-prod">${producto.precio} $</span>
      <button id="${producto.id}" class="btn  btn-dark btn-add-cart"">add to cart</button>
      </div>
    </div>
    </div>`;

    shopContent.append(content);
  });
};
printListaProducts(productos);
//enviar porducto al array carrito
const comprarProd = () => {
  const comprar = document.getElementsByClassName("btn-add-cart");
  for (const btn of comprar) {
    btn.addEventListener("click", () => {
      //hice un filtro que me devuelva solo el producto que coincida con el id del boton
      const producto = productos.filter((producto) => producto.id == btn.id);
      // recorri el producto que coincidia con el id del boton del evento
      producto.forEach((productoCarro) => {
        //para luego pushear al carito el objeto
        const productosACarro = {
          id: productoCarro.id,
          modelo: productoCarro.modelo,
          precio: productoCarro.precio,
          cantidad: 1,
        };
        //validacion de la existencia de productos en el carro
        const existencia = carrito.some(
          (product) => product.id === productoCarro.id
        );

        if (existencia) {
          const hayProducto = carrito.map((product) => {
            //si los id son iguales , suma la cantidad
            if (product.id == productosACarro.id) {
              product.cantidad++;
              return product;
            } else {
              //si no encuentra nada segui tranca con
              return product;
            }
          });
          carrito = [...hayProducto];
        } else {
          toast(productosACarro);
          carrito = [...carrito, productosACarro];
        }
        console.table(carrito);
      });
      totalCarrito = carrito.reduce(
        (acc, prodCarro) => acc + prodCarro.precio * prodCarro.cantidad,
        0
      );
      contadorCarrito();
      saveCarrito(); //lo pongon al final para que una vez pusheado , se guarde en el local
    });
  }
};
comprarProd();
//set item(guardado)
const saveCarrito = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito)); //mandar en forma de string
};
//filtrar productos
const filtradoXMarca = (btnMarca) => {
  const marca = productos.filter((producto) =>
    producto.marca.includes(btnMarca)
  );
  console.table(marca);
  shopContent.innerHTML = "";
  printListaProducts(marca);
};
const btnCheck = document.getElementsByClassName("btn-check");
console.log(btnCheck);
for (const btn of btnCheck) {
  btn.addEventListener("click", () => {
    let btnId = btn.id;

    switch (btnId) {
      case "btn-samsung":
        filtradoXMarca("samsung");
        comprarProd();
        console.log("samsung es el mejor");
        break;
      case "btn-motorola":
        filtradoXMarca("motorola");
        comprarProd();
        console.log("motorola es el mejor");
        break;
      case "btn-xiaomi":
        filtradoXMarca("xiaomi");
        comprarProd();
        console.log("xiaomi es el mejor");
        break;
      case "btn-iphone":
        filtradoXMarca("apple");
        comprarProd();
        console.log("iphone es el mejor");
        break;
      default:
        break;
    }
  });
}
const btnRemoveFilter = document.getElementById("remove-filter");
btnRemoveFilter.addEventListener("click", () => {
  console.log("removee");
  shopContent.innerHTML = "";
  printListaProducts(productos);
  comprarProd();
});

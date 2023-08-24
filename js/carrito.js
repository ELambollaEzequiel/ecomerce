const pintarCarrito = () => {
  modalContainer.innerHTML = ``;
  //este displeay hace que al tocarlo nuevamente se abra , vendria a sacar el display none
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";

  modalContainer.append(modalHeader);

  const modalButton = document.createElement("button");
  modalButton.innerText = "❌";
  modalButton.className = "modal-header-button btn btn-danger";
  modalHeader.append(modalButton);
  //desaparecer el carrito
  modalButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
    <img src="https://img.freepik.com/free-psd/smartphone-mockup_1310-812.jpg?w=1380&t=st=1692649559~exp=1692650159~hmac=8770b71239435edc69af85f0c358a728df2e424e7935eb34be1983a85588cc39" style="height:100px;width:100px"alt="${
      product.modelo
    }">
    <h6>${product.modelo}</h6>
    <div class="modif-cant restar btn btn-outline-dark"> ➖ </div>
    <h6>Cantidad : ${product.cantidad}</h6>
    <div class="modif-cant sumar btn btn-outline-dark"> ➕ </div>
    <h6>Total: $ ${product.precio * product.cantidad}</h6>
  `;

    modalContainer.append(carritoContent);

    //modificar cant en carrito
    //restar
    let restar = carritoContent.querySelector(".restar"); //funciona como si fuera csss de carrito content seleccioname restar

    restar.addEventListener("click", () => {
      //establezco una condicion para que el carrito corte en 0
      if (product.cantidad !== 1) {
        // si el usuario quiere menos de uno debe eliminarlo cn el boton que ya creamos
        //hay que actualizarlo en el storage
        product.cantidad--;
      } else {
      }
      saveCarrito();
      pintarCarrito(); //renderizo el carrito nuevamente con las cantidades actualizadas
    });
    //sumar
    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      product.cantidad++;
      saveCarrito(); //hay que actualizarlo en el storage
      pintarCarrito();
    });

    //eliminar botn
    let eliminar = document.createElement("span");
    eliminar.innerText = "🗑";
    eliminar.className = "delete-prdouct btn btn-outline-danger";
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarProducto);
  });

  totalCarrito = carrito.reduce(
    (acc, product) => acc + product.precio * product.cantidad,
    0
  );
  console.log(totalCarrito);
  const totalComprado = document.createElement("div");
  totalComprado.className = "total-content";
  // totalComprado.innerHTML = `total a pagar : ${totalCarrito}`;

  //agruegar botn finalizar compra
  totalComprado.innerHTML = `
              <p class="total-pagar">total a pagar : $ ${totalCarrito}</p>
              <a
              
              role="button"
              class="icon-cart btn btn-outline-dark"
              id="btn-finalizar-compra"
              >
              Finalizar compra 🛍
              </a>
              `;

  modalContainer.append(totalComprado);

  const btnFinalizar = document.getElementById("btn-finalizar-compra");
  btnFinalizar.addEventListener("click", () => {
    console.log("finalizando");
    carrito = [];
    saveCarrito();
    contadorCarrito();
    pintarCarrito();
    shopContent.innerHTML = "";

    printListaProducts(productos);
  });
};

verCarrito.addEventListener("click", pintarCarrito);

//este btn va a estar asociado al id y me filtran todos los productos sin ese id
const eliminarProducto = () => {
  //busca dentro del carrito el id de los productos(element)
  const foundId = carrito.find((element) => element.id);
  //found id va a guar un numero(element.id)
  //nuevo valor del carrito con los objetos que no contengan el id del evento
  carrito = carrito.filter((carritoId) => {
    return carritoId != foundId;
  });
  //renderizo nuevcmente el id
  contadorCarrito();
  saveCarrito(); //vuelvo a invocar el local , para obtener nueva mente elcarrito y guardarlo desp de eliminar (checkpoint)
  pintarCarrito();
};

const contadorCarrito = () => {
  const carritoContador = carrito.length;

  localStorage.setItem("carritoContador", JSON.stringify(carritoContador));

  cantProdsCarrito.innerText = JSON.parse(
    localStorage.getItem("carritoContador")
  );
};
contadorCarrito();

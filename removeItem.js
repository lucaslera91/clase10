
let codProducto = obtenerCodigoProducto();


function listarProductosElegidos(codigoProducto) {
    //recupero de LStorage   
    let listaDeProductos = JSON.parse(localStorage.getItem("listaEcomerce"));
    let contenedor = document.getElementById("detalleDeProducto");
    //alert(codigoProducto);
    for (let i = 0; i < listaDeProductos.length; i++) {
        if (listaDeProductos[i].codigo == codigoProducto) {
            let prodCreado = document.createElement("div");
            let producto = listaDeProductos[i];
            prodCreado.innerHTML = `<div class="card">
            <h2>${producto.nombre}</h2>
         <img src="${producto.imagen}" alt="imagen">
         
         <h3>${producto.precio}</h2>
         <h3>${producto.descripcion}</h3>
         <h3>${producto.categoria}</h3>
         <button><a id="confirmRemove" href="checkOut.html">Remove from Cart</a></button>
         <button><a href="carrito.html">Back to Cart</a></button>
         <button><a href="checkOut.html">Checkout Cart</a></button>
     </div>`;

            contenedor.appendChild(prodCreado);
        }
    }

}
listarProductosElegidos(codProducto);


function obtenerCodigoProducto() {
    const queryString = window.location.search;
    const urlPalms = new URLSearchParams(queryString);
    const idproducto = urlPalms.get('idproducto');
    // alert(idproducto);
    codigoProductoElegido = idproducto;
    return codigoProductoElegido;
}

let removeFromCarrito = document.getElementById("confirmRemove");
let listaDeProductos = JSON.parse(localStorage.getItem("listaEcomerce"));

removeFromCarrito.addEventListener("click", removeItem);


function removeItem() {

    
    let listaCarro = JSON.parse(localStorage.getItem("carro"));
    
    let codigoAux = obtenerCodigoProducto();
    debugger;

    for (let i = 0; i < listaCarro.length; i++) {
        //producto = listaDeProductos[i];
        if (listaCarro[i].producto.codigo == codigoAux) {
           listaCarro.splice(i,1);
        }
    }
    localStorage.setItem("carro", JSON.stringify(listaCarro));

}




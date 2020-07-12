
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
         <button><a id="addToCart" href="detalleProducto.html?idproducto=${producto.codigo}">Add to Cart</a></button>
         <button><a href="detalleProducto.html?idproducto=${producto.codigo}">Checkout Cart</a></button>
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

class Carrito {
    constructor(producto) {
        this.producto = producto;
    }
}


let addToCarrito = document.getElementById("addToCart");
let listaDeProductos = JSON.parse(localStorage.getItem("listaEcomerce"));

addToCarrito.addEventListener("click", addToCart);

// function addToCart() {

//     if ((typeof localStorage.getItem("carro") === "null") || (typeof localStorage.getItem("carro") === "undined")) {
//         alert("hola no deberia");
//         let listaCarro = [];

//         let codigoAux = obtenerCodigoProducto();
//         debugger;

//         for (let i = 0; i < listaDeProductos.length; i++) {
//             producto = listaDeProductos[i];
//             if (listaDeProductos[i].codigo == codigoAux) {
//                 let carro = new Carrito(producto);
//                 listaCarro.push(carro);
//             }
//         }
//         localStorage.setItem("carro", JSON.stringify(listaCarro));
//     } else {
//         alert("hola");

//         let listaCarro = JSON.parse(localStorage.getItem("carro"));

//         let codigoAux = obtenerCodigoProducto();
//         debugger;

//         for (let i = 0; i < listaDeProductos.length; i++) {
//             producto = listaDeProductos[i];
//             if (listaDeProductos[i].codigo == codigoAux) {
//                 let carro = new Carrito(producto);
//                 listaCarro.push(carro);
//             }
//         }
//         localStorage.setItem("carro", JSON.stringify(listaCarro));

//     }

// }


function addToCart() {

    let auxTest = 0;
    try{
    let listaCarroTest = JSON.parse(localStorage.getItem("carro"));
    listaCarroTest[0];
    }catch (e){;
        alert("caght error");
     listaCarro = [];
     auxTest = 1;
    }
    if(auxTest == 0){
    listaCarro = JSON.parse(localStorage.getItem("carro"))
    }
    let codigoAux = obtenerCodigoProducto();
    debugger;

    for (let i = 0; i < listaDeProductos.length; i++) {
        producto = listaDeProductos[i];
        if (listaDeProductos[i].codigo == codigoAux) {
            let carro = new Carrito(producto);
            listaCarro.push(carro);
        }
    }
    localStorage.setItem("carro", JSON.stringify(listaCarro));

}




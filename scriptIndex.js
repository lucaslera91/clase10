// //Entidades:
// Productos:
// codigo
// nombre
// descrip
// precio
// imagen
// categoria


// CarritoC
// Productos

// Medios de Pagos:
// codigo:
// descrip

// Categoria:
// codigo:
// descrip


let categorias = [{ 1: "Azules" }, { 2: "Rojos" }, { 3: "Blancos" }];

class Producto {
    constructor(codigo, nombre, descripcion, precio, imagenUrl, categoria, catID) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagenUrl;
        this.categoria = categoria;
        this.catID = catID;
    }
}
function guardarLista() {
    let listaDeProductos = [];
    for (let i = 0; i < 10; i++) {
        let cat = "Azul";
        let catID = 1;
        if (i > 3) {
            cat = "Rojo";
            catID = 2;
        }
        if (i > 8) {
            cat = "Blanco";
            catID = 3;
        }
        let producto = new Producto(i, "Gorrito " + i, "Gorro Rojo " + i, Math.round(Math.random() * 25, 2), "https://www.drawingforall.net/wp-content/uploads/2018/02/5-How-to-draw-a-knit-hat.jpg", cat, catID)
        listaDeProductos.push(producto);
    }
    localStorage.setItem("listaEcomerce", JSON.stringify(listaDeProductos));
}

function listarProductos() {
    //recupero de LStorage   
    let listaDeProductos = JSON.parse(localStorage.getItem("listaEcomerce"));
    let contenedor = document.getElementById("listaDeProductos");
    debugger;
    for (let i = 0; i < listaDeProductos.length; i++) {
        let prodCreado = document.createElement("div");
        let producto = listaDeProductos[i];
        prodCreado.innerHTML = `<div class="card">
        <img src="${producto.imagen}" alt="imagen">
        <h2>${producto.nombre}</h2>
        <h3>${producto.precio}</h2>
        <h3>${producto.categoria}</h3>
        <button><a href="detalleProducto.html?idproducto=${producto.codigo}">Ver mas</a></button>
    </div>`;

        contenedor.appendChild(prodCreado);
    }

}
//listarProductos();

function listarProductosCategorias(categoriaID) {
    //recupero de LStorage   
    let listaDeProductos = JSON.parse(localStorage.getItem("listaEcomerce"));
    let contenedor = document.getElementById("listaDeProductos");
    //alert(codigoProducto);
    for (let i = 0; i < listaDeProductos.length; i++) {
        debugger;
        let prodCreado = document.createElement("div");
        let producto = listaDeProductos[i];

        //alert(listaDeProductos[i].catID);
        if (producto.catID == categoriaID) {
            prodCreado.innerHTML = `<div class="card">
         <h2>${producto.nombre}</h2>
         <img src="${producto.imagen}" alt="imagen">
         <h3>${producto.precio}</h2>
         <h3>${producto.categoria}</h3>
         <button><a href="detalleProducto.html?idproducto=${producto.codigo}">Ver mas</a></button>
         </div>`;

            contenedor.appendChild(prodCreado);
        }
    }

}
guardarLista();

//let categoria = obtenerCategoria();

let auxTodas = document.getElementById("todas");
auxTodas.addEventListener("click", filtraTodos);

let auxAzules = document.getElementById("azules");
auxAzules.addEventListener("click", filtraAzules);

let auxRojas = document.getElementById("rojos");
auxRojas.addEventListener("click", filtraBlancos);

let auxBlancas = document.getElementById("blancos");
auxBlancas.addEventListener("click", filtraRojos);





//alert("hola");

//return categoria;


// function filtraTodo(){



//     return auxCategoria    //let listaDeProductos = JSON.parse(localStorage.getItem("listaEcomerce"));
// }
window.onload = filtraTodos();

function filtraTodos() {
    let contenedor = document.getElementById("listaDeProductos");
    contenedor.innerHTML = "";
    listarProductos();

}

function filtraAzules() {
    let contenedor = document.getElementById("listaDeProductos");
    contenedor.innerHTML = "";
    listarProductosCategorias(1);

}
function filtraBlancos() {
    let contenedor = document.getElementById("listaDeProductos");
    contenedor.innerHTML = "";
    listarProductosCategorias(2);
}
function filtraRojos() {
    let contenedor = document.getElementById("listaDeProductos");
    contenedor.innerHTML = "";
    listarProductosCategorias(3);
}

//function listarProductosCategorias(categoria);

//listarProductos();


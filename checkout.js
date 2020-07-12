function listarCarro() {
    //recupero de LStorage   
    let listaDeCarro = JSON.parse(localStorage.getItem("carro"));
    let contenedor = document.getElementById("carritoCheckout");
    debugger;
    for (let i = 0; i < listaDeCarro.length; i++) {

        let prodCreado = document.createElement("div");
        let carro = listaDeCarro[i];
        prodCreado.innerHTML = `<div class="card">
        <img src="${carro.producto.imagen}" alt="imagen"></img>
        <h2>${carro.producto.nombre}</h2>
        <h3>${carro.producto.precio}</h2>
        <h3>${carro.producto.categoria}</h3>
        <button><a id="eliminarItem" href="removeItem.html?idproducto=${carro.producto.codigo}">Eliminar Item</a></button>

         <button><a href="checkOut.html">Checkout Cart</a></button>
    </div>`;

        contenedor.appendChild(prodCreado);
    }

}
        //<button><a id="remove${carro.producto.codigo}" href="removeItem.html?idproducto=${carro.producto.codigo}">Remove</a></button>

function totales() {
    //recupero de LStorage   
    let listaDeCarro = JSON.parse(localStorage.getItem("carro"));
    let contenedor = document.getElementById("total");
    debugger;
    let prodCreado = document.createElement("div");
    let pagoTotal = 0;

    for (let i = 0; i < listaDeCarro.length; i++) {
        let carro = listaDeCarro[i];
        pagoTotal += carro.producto.precio;
    }
    prodCreado.innerHTML = `
    <div id="textoTotal">
     <h3>Total a pagar es: ${pagoTotal} USD </h3>
    </div>`;
     contenedor.appendChild(prodCreado);

}



let help = 0;
try{
    let listaCarro = JSON.parse(localStorage.getItem("carro"));
    listaCarro[0];
    }catch (e){;
        help = 1;
    }   
if(help == 1){
    let contenedor = document.getElementById("carritoCheckout");
    let prodCreado = document.createElement("div");
    prodCreado.innerHTML = "No hay productos en el carrito"
    contenedor.appendChild(prodCreado);
}else{
    listarCarro();
    totales();
}

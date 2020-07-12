function listarCarro() {
    //recupero de LStorage   
    let listaDeCarro = JSON.parse(localStorage.getItem("carro"));
    let contenedor = document.getElementById("carrito");
    debugger;
    for (let i = 0; i < listaDeCarro.length; i++) {
    
        let prodCreado = document.createElement("div");
        let carro = listaDeCarro[i];
        prodCreado.innerHTML = `<div class="card">
        <img src="${carro.producto.imagen}" alt="imagen"></img>
        <h2>${carro.producto.nombre}</h2>
        <h3>${carro.producto.precio}</h2>
        <h3>${carro.producto.categoria}</h3>
        <button><a id="confirmRemove" href="removeItem.html?idproducto=${carro.producto.codigo}">Remove from Cart</a></button>
         <button><a href="checkOut.html">Checkout Cart</a></button>
    </div>`;

        contenedor.appendChild(prodCreado);
    }

}
try{
    let listaCarro = JSON.parse(localStorage.getItem("carro"));
    listaCarro[0];
    }catch (e){;
        
        let contenedor = document.getElementById("carrito");
        let prodCreado = document.createElement("div");
        prodCreado.innerHTML = "No hay productos en el carrito"
        contenedor.appendChild(prodCreado);
    }   

listarCarro();
//<img src="${producto.imagen}" alt="imagen"></img>
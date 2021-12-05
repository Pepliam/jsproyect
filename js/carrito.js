let productosEnLocalStorage = JSON.parse(localStorage.getItem(`productos`)); /*busco lo q hay en lstorage*/

for (let i = 0; i < productosEnLocalStorage.length; i++) {
    $("#mainCarrito").append(`
        <div class = "productos__container">
            <h6 class = "productos__container--nombre">${productosEnLocalStorage[i].productoNombre}</h6>   
                          
                <div class ="productos__container--precio">${productosEnLocalStorage[i].productoPrecio}$</div>
                <a href = "/carrito.html" class = "productos__container--delete deleteButton${i}">Eliminar ${productosEnLocalStorage[i].productoNombre} del carrito</a>
        </div>`)

    $(`.deleteButton${i}`).click(() => {
        
        if (productosEnLocalStorage[i].productoNombre === productosEnLocalStorage[i].productoNombre) {

            productosEnLocalStorage.splice(i, 1);
        }
        localStorage.setItem(`productos`, JSON.stringify(productosEnLocalStorage));
    })
}
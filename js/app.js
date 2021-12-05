$.get("/js/productos.json", data => {

    const guardarProductosEnCarrito = i => {
        $(`.button${i}`).click(() => {
            const productoNombre = data.productos[i].nombre;
            const productoPrecio = data.productos[i].precio;

            let productosObject = {
                productoNombre,
                productoPrecio,
            }

            if (localStorage.getItem(`productos`) === null) {
                let productosArray = []
                productosArray.push(productosObject) /*creo array y pusheo lo que obtengo de preico y nombre*/
                localStorage.setItem(`productos`, JSON.stringify(productosArray)) /* generame con clave "productos", y dame como string lo que este adentro*/
            } else {
                /*cuando el localStorage, NO sea NULL, es decir que tenga algo. SEGUNDO CLICK*/
                let productosEnLocalStorage = JSON.parse(localStorage.getItem(`productos`)); /*traigo productos del local  y parseo*/
                productosEnLocalStorage.push(productosObject); /*mando y actualizzo el localSt*/
                localStorage.setItem(`productos`, JSON.stringify(productosEnLocalStorage))
            }
        })
    }

    for (let i = 0; i < data.productos.length; i++) {
        $(".main__container").append(
            `<div class = "main__card">
                        <h2 class = "main__card--title main__card--element">${data.productos[i].nombre}</h2>                        
                        <p class = "main__card--p main__card--element">${data.productos[i].descripcion}</p>
                        <h3 class = "main__card--h3 main__card--element">$${data.productos[i].precio}</h3>
                        <img src= ${data.productos[i].imagen} class = "main__card--img main__card--element">                        
                        <button class = "btn btn-primary main__card--button main__card--element button${i}")><a onclick=sumarSpan()>AGREGAR AL CARRITO</a></button>
                    </div>`
        )
        console.log("entro"),
            guardarProductosEnCarrito(i);
    }


}).fail(() => {
    /*cuando no hay internet, o no encuentra ruta, activo error*/
    console.log("error")
    swal("ERROR 404", "Error en la base de datos, por favor contacte a soporte tecnico,")
});

const sumarSpan = () => {
    let elemento = document.getElementsByTagName('span')[0]
    let cantidad = parseFloat(elemento.innerHTML) + 1;
    elemento.innerHTML = cantidad;
}
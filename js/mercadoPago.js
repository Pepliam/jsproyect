$(document).ready(function () {
    const APIURL = `https://api.mercadopago.com`;
    const infoPost = {
        tarjeta: "credito",
        empresa: "Visa"
    }
    $("#mainmercadoPago").prepend(`<button id="btn1" class="btn btn-primary" disabled>Con tarjeta de Credito</button>
    <button id="btn2" class="btn btn-primary" disabled>Con tarjeta de Debito</button>
    <button id="btn3" class="btn btn-primary" disabled>Con Dinero en Cuenta</button>`);
    $("#btn1").click(() => {
        $.ajax({
            method: "POST",
            url: APIURL,
            data: infoPost,
            success: function (respuesta) {
                $("#mainmercadoPago").prepend(`<div>${respuesta.tarjeta}</div>`);
            }
        });
    });
});
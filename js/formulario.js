$(".tituloForm").animate({
    left: `250px`,
    opacity: `0.0`,
    height: `8px`
  },
  3500,
  function () {
    ;
  })

function validarFormulario() {
  let nombre = document.getElementById("nombre").value;
  if (nombre === "") {
    alert("Ingrese su nombre");
    return;
  }
  console.log("Formulario enviado");
  document.formulario.submit();
}

$("#email").blur((e) => {
  if (e.target.value.length === 0) {
    $("#email").css({
      "border-color": "red"
    });
    $("span").css("display", "block");
  } else {
    $("#email").css({
      "border-color": "black"
    });
  }
});
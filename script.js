var btnCodificar = document.querySelector(".boton-codificar");
var btnDecodificar = document.querySelector(".boton-decodificar");

btnCodificar.addEventListener("click", function (e) {
  e.preventDefault();

  var texto = document.querySelector(".entrada-texto").value.toLowerCase();

  var txtCifrado = texto.replace(/e/img, 'enter');
  txtCifrado = txtCifrado.replace(/o/img, 'ober');
  txtCifrado = txtCifrado.replace(/i/img, 'imes');
  txtCifrado = txtCifrado.replace(/a/img, 'ai');
  txtCifrado = txtCifrado.replace(/u/img, 'ufat');

  document.querySelector(".bloque-salida").innerHTML = txtCifrado;
})

btnDecodificar.addEventListener("click", function (e) {
  e.preventDefault();

  var texto = document.querySelector(".entrada-texto").value.toLowerCase();
  
  var txtCifrado = texto.replace(/enter/img, 'e');
  txtCifrado = txtCifrado.replace(/ober/img, 'o');
  txtCifrado = txtCifrado.replace(/imes/img, 'i');
  txtCifrado = txtCifrado.replace(/ai/img, 'a');
  txtCifrado = txtCifrado.replace(/ufat/img, 'u');

  document.querySelector(".bloque-salida").innerHTML = txtCifrado;
})
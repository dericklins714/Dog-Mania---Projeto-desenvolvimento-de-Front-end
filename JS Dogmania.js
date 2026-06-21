//oferta

const botaoOferta = document.getElementById("btnOferta");
const mensagemOferta = document.getElementById("mensagemOferta");

botaoOferta.addEventListener("click", function () {

    mensagemOferta.innerHTML =
        "Promoção Relâmpago: Na compra de 2 hot dogs, ganhe um refrigerante de 1L! Use o cumpom DogMais";
});


const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    let resultado = document.getElementById("resultado");

    if(nome === "" || email === "" || mensagem === ""){
        resultado.style.color = "red";
        resultado.innerHTML =
            "Preencha todos os campos!";
        return;
    }

    if(!email.includes("@")){
        resultado.style.color = "red";
        resultado.innerHTML =
            "Digite um e-mail válido!";
        return;
    }

    resultado.style.color = "green";
    resultado.innerHTML =
        "Mensagem enviada com sucesso! Dados gravados no sistema.";

    formulario.reset();
});
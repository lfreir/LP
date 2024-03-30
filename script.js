const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputMensagem = document.getElementById("mensagem");
const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", () => {
    if(!inputNome.value || inputEmail.value || inputMensagem.value){
        alert("Preencha todos os campos dos formulário");
    }else{
        alert("Mensagem enviada com sucesso! Agradeço pelo seu contato.")
    }
    
})
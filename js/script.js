document.getElementById("enviar").addEventListener("click", validaFormulario)

function validaFormulario() {
    if (document.getElementById("nome").value != "" &&
        document.getElementById("email").value != "" && 
        document.getElementById("telefone").value != "" ) {
        alert("Prontinho! Você receberá por e-mail!")
    }
    else {
        alert("Por favor, preencha todos os campos antes de enviar!")
    }
}
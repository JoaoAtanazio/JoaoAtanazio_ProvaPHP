function validarFuncionario() {
    let nome = document.getElementById("nome_funcionario").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;

    if (nome.length < 3) {
        alert("O nome do funcionário deve ter pelo menos 3 caracteres.");
        return false;
    }

    let regexTelefone = /^[0-9]{10,11}$/;
    if (!regexTelefone.test(telefone)) {
        alert("Digite um telefone válido (10 ou 11 dígitos).");
        return false;
    }

    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Digite um e-mail válido.");
        return false;
    }

    return true;
}

function validarFornecedor(){
    document.getElementById("formCadastro").addEventListener ("submit", function(e) {
        let nome = document.getElementById("nome").value;
        let telefone = document.getElementById("telefone").value;
        let email = document.getElementById("email").value;

        if (nome.length < 3) {
            alert("O usuário deve ter pelo menos 3 caracteres");
            e.preventDefault();

            return false;
        }

        if(telefone.length > 17 || telefone.length < 8){
            alert("Telefone inválido")
            e.preventDefault();

            return false;
        }

        if(!email.includes("@")){
            alert ("Digite um email válido");
            e.preventDefault();

            return false;
        }
    });
}
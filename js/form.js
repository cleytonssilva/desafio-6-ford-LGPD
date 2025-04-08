
//class contato

class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
    mostrarDados(){
        return {
            "nome": this.nome,
            "sobrenome": this.sobrenome,
            "email": this.email,
            "cpf": this.cpf,
            "telefone": this.telefone,
            "contato": this.contato
        }
    }
    
}

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);
            
  Enviar(data);
}

function Limpar() {
    document.getElementById("form").reset();
}

function Enviar(pessoa) {

    console.table(pessoa.mostrarDados());

    if (pessoa.nome != "")  {
        alert('Obrigado sr(a) ' + pessoa.nome + ' os seus dados foram encaminhados com sucesso');
    }

Limpar();
    
}

function validar(el) {
    if (el.checked){
        document.getElementById("enviar-contato").disabled = false;
    }
    else{
        document.getElementById("enviar-contato").disabled = true;
    }
}

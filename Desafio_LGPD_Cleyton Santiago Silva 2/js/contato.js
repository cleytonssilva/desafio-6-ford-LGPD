class Data{
    nome;
    sobrenome;
    cpf;
    email;
    telefone;
    contato;
    
    constructor(){
        this.updateValues();

        document.getElementById("enviar".onclick, (event) => {
            this.updateValues(event);
        });
            
    }

    updateValuesBtn(event){
        if(document.getElementsByName("contato"[0].valueOf) !== ""){
            this.updateValues();

            
        }else{
            alert("Dados não enviados, preencha todo formulário");
        }

        this.updateValues();
        this.debug();   
        event.preventDefault();

    }

    updateValues(){
        console.log("estou aqui");
        this.nome = document.getElementsByName("nome")[0].value;
        this.sobrenome = document.getElementsByName("sobrenome")[0].value;
        this.cpf = document.getElementsByName("cpf")[0].value;
        this.email = document.getElementsByName("email")[0].value;
        this.telefone = document.getElementsByName("telefone")[0].value;
        this.contato = document.getElementsByName("contato")[0].value;
    }

    
}

let dadosIniciais =  new Data();

console.log(dadosIniciais);

dadosIniciais.debug();

console.log(dadosIniciais.showValues);

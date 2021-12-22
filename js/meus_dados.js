class Eu {
    idade
    email
    conhecimentos

    constructor (idade,email,conhecimentos) {
        this.idade = idade
        this.email = email
        this.conhecimentos = conhecimentos
    }

    meApresentar(){
        return "ola tenho " + this.idade +
        " anos, pode entrar em cntt cmg pelo email " + this.email +
        " no momento aprendi sobre: <UL>" + this.aprendizado() + "</UL>"
        
    }

    aprendizado(){

        let texto = ""
        for(let contador = 0; contador < this.conhecimentos.length;contador++){
            texto+="<li>"+this.conhecimentos[contador] + "</li>"
        }
        return texto
    }
}
let conhecimentos = [
    "-Algoritmos 1 (pseudocódigo com VisualG)",
    "-Algoritmos 2 (linguagem de programação javascript)"
]
let minha_pessoa = new Eu(17, "joao.a.pereira04@gmail.com",conhecimentos)

document.writeln(minha_pessoa.meApresentar())
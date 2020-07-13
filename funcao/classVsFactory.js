class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

function Pessoa2(nome){
    
    this.nome = nome
    this.falar = function (){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p3 = new Pessoa2("Pedro")
p3.falar()
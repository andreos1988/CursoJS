const pessoa ={
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa()

const aluno = {
    nome: 'André',
    perguntar(){
        console.log(`${this.nome} tem uma pergunta`)
    }
}

const soPerguntas = aluno.perguntar.bind(aluno)

soPerguntas() 


const prova =  {}
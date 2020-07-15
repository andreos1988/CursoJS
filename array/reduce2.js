const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true},
]
let resultado = alunos.map(aluno => (aluno.bolsista))
console.log(resultado)
resultado.reduce((total, next) => total && next)
//Todo aluno é bolsista?
console.log(resultado.reduce((total, next) => total && next))
//Tem algum aluno bolsista

console.log(resultado.reduce((total, next) => total || next))
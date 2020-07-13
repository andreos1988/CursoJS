//Factory

function criarPessoa(nome, sobrenome){
    return {
        nome: nome,
        sobrenome: sobrenome,
        desconto: 0.3
    }
}

console.log(criarPessoa('Andre', 'Oliveira'))
console.log(criarPessoa('Joana', 'Silva'))

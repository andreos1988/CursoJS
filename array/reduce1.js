Array.prototype.reduce2 = function(callback, acumulador = 0){
    this.acumulador = acumulador
    for(i = 0; i < this.length; i++){
        this.acumulador += callback(this.acumulador, this[i])
    }
    return this.acumulador
}

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true},
]
const resultado = alunos
                    .map(a => a.nota)
                    .reduce2(function(acumulador, atual) {
                        console.log(acumulador, atual)
                        return acumulador + atual
                    })

console.log(resultado)

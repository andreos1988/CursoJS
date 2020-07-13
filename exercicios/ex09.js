const encontrarMultiploCinco = function (nota){
    while(nota % 5 != 0) nota++
    return nota
}

const calcularNotas = function(nota){
    if(nota < 38){
        return console.log('Reprovado')
    }
    const notaMultiploCinco = encontrarMultiploCinco(nota)
    if(notaMultiploCinco - nota < 3)nota = notaMultiploCinco
    return console.log(nota)
}
calcularNotas(38)
const calculaJurosSimples = function (C, i, t){
    return C * (1 + i * t)
}
const calculaJurosCompostos = function (C, i, t){
    return C * Math.pow((1 + i ), t)
}
console.log('Montante com Juros Simples =' + calculaJurosSimples(1200, 0.02, 15))
console.log('Montante com Juros Compostos =' + calculaJurosCompostos(1200, 0.02, 15))
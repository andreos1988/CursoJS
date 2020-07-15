const calculadora = function (a, operacao, b) {
    switch(operacao){
        case '+':
            console.log(a + b)
            break
        case '-':
            console.log(a - b)
            break
        case '*':
            console.log(a * b)
            break
        case '/':
            console.log(a / b)
            break
        default:
            console.log('operação inválida')
    }

}
calculadora(1, '-', 3)
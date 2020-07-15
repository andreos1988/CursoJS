const calcularSalario = function (salario, aumento) {
    switch(aumento){
        case 0.1:
        case 0.15:
        case 0.2:
            console.log('Novo salário: R$ '+ (salario + (aumento * salario)))
            break
        default:
            console.log('plano inválido')

    }
}
calcularSalario(500, 0.15)
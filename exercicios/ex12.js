const fatorial = function (numero){
    let multiplicador = 0;
    for(let i=numero; i > 0; i--){
        if(multiplicador == 0){
            multiplicador = numero;
        }else{
            multiplicador = multiplicador * i;
        }
    }
    return multiplicador
}

console.log(fatorial(4))
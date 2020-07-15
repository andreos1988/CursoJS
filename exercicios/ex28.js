const contarParesImpares = function(){
    let contaPar = 0
    let contaImpar = 0
    const arrInteiros = [10,23,45,66,77,55,35, 24]

    arrInteiros.forEach(element => {
        if(element % 2 === 0){
            contaPar++
        }else{
            contaImpar++
        }
    });
    console.log(`${contaPar} são pares e ${contaImpar} são ímpares`)
}

contarParesImpares()
const exibirNumerosPares = function(primeiro = 0, ultimo = 100){
    for(let i = primeiro; i <= ultimo; i++){
        if(i % 2 === 0){
            console.log(i)
        }
            
    }
}

exibirNumerosPares(1,100)
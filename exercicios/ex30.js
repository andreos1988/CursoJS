const maiorMenor = function(){
    const vetorInteiros = [10,20,30,11,4,55]
    let menor = -1
    let maior = -1

    for(let i = 0; i < vetorInteiros.length; i++){
        if(menor === -1){
            menor = vetorInteiros[i]
        }else if(vetorInteiros[i] < menor){
            menor = vetorInteiros[i]
        }
    }
    for(let i = 0; i < vetorInteiros.length; i++){
        if(maior === -1){
            maior = vetorInteiros[i]
        }else if(vetorInteiros[i] > maior){
            maior = vetorInteiros[i]
        }
    }
    console.log('O menor é ' + menor)
    console.log('O maior é ' + maior)
}

maiorMenor()
const feira = function (fruta) {
    switch(fruta){
        case 'maçã':
            console.log('Não vendemos essa fruta aqui')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'melancia':
            console.log('aqui está, são 3 reais o quilo')
            break
        default:
            console.log('erro')
    }
}
feira('maçã')
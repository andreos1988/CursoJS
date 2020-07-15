const contarNotas = function ( valorTotal ) {
    const arrNotas = [100, 50, 10, 5, 1]
    let arrResultado = []
    while(valorTotal > 0){
        for(let i=0; i < arrNotas.length; i++){

            if(valorTotal - arrNotas[i] >= 0){
                    
                    arrResultado.push(arrNotas[i]) 
                    valorTotal = valorTotal - arrNotas[i]
                    break
            }
        }
        //arrResultado.sort((a, b)=> a - b);
       
        

    }
    console.log(arrResultado)

}
contarNotas(144)
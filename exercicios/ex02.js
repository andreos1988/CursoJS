const ClassificaTriangulo = function(a, b, c){
    if(a==b && a==c && b==c){
        console.log('Equilátero')
    }else if((a == b) ||  (a == c) || (c == b)){
        console.log('Isósceles')
    }else if(a != b && b != c && a != c){
        console.log('Escaleno')
    }
}

ClassificaTriangulo(5,6,2)
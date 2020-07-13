const calculoBhaskara = function (a, b, c){
    let delta = Math.pow(b, 2) - 4 * a * c
    if(delta > 0){
        return[
            (-b + Math.sqrt(delta))/(2*a),
            (-b - Math.sqrt(delta))/(2*a)
        ]
    } else{
        return 'Delta é negativo'
    }
}

console.log(calculoBhaskara(4,2, -6))
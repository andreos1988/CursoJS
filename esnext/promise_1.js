let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p
    .then(valor => valor[0])
    .then(primeira => primeira[0])
    .then(letraMinuscula => letraMinuscula.toLowerCase())
    .then(valor => console.log(valor))
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response =>{
    const funcionarios = response.data
    //console.log(funcionarios)

    const mulherChinesa = func => func.genero === 'F' && func.pais === 'China'
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }
    const resultado = funcionarios
                            .filter(mulherChinesa)
                            .reduce(menorSalario) 
    console.log(resultado)
})
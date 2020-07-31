import React from 'react'
import ReactDOM from 'react-dom'

//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

//ReactDOM.render(<BomDia nome="Guilherme" />, document.getElementById('root'))
ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
    
    , document.getElementById('root'))

//$('<h1>').html('React 2')
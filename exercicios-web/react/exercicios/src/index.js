import React from 'react'
import ReactDOM from 'react-dom'
// import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'

import { BoaNoite, BoaTarde } from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
// import Multi from './componentes/Multiplos'

// ReactDOM.render(<Primeiro></Primeiro>, document.getElementById('root') )

// ReactDOM.render(
// <React.Fragment>
//     <BoaTarde nome="Diomar" />
//     <BoaNoite nome="Diomar" />
// </React.Fragment>, document.getElementById('root') )

// ReactDOM.render(
//     <React.Fragment>
//     <Multi.BoaTarde nome="Diomar" />
//     <Multi.BoaNoite nome="Diomar" />
//     </React.Fragment>, document.getElementById('root') )

const app = <React.Fragment>
    <Saudacao tipo="Bom dia" nome="Diomar"></Saudacao>
    <Pai nome="Diomar" sobrenome="Rockenbach" />
</React.Fragment>

ReactDOM.render(app
    , document.getElementById('root') )
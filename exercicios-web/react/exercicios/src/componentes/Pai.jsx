
import React from 'react'
import Filho from './Filho'

export default props => 
<React.Fragment>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <ul>
        <Filho nome="Rafa" sobrenome={props.sobrenome}/>
        <Filho nome="Vini" sobrenome={props.sobrenome}/>
        <Filho {...props}/>

        {/* Propriedades que vão ser sobreescritas, devem vir depois do spread, conforme abaixo */}
        <Filho {...props} nome="Isabela"/> 
    </ul>
</React.Fragment>

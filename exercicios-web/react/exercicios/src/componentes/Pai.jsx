
import React from 'react'
import Filho from './Filho'
import { childrenWithProps } from '../utils/utils'


export default props => 
<React.Fragment>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <ul>
       {   
           childrenWithProps(props)
        }
    </ul>
</React.Fragment>

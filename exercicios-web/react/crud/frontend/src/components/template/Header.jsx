import './Header.css'
import React from 'react'

export default props => 
// d-none - para celulares não vai aparecer o cabeçalho
// d-sm-flex - Se o dispositivo for sm para cima, vai usar display-flex
<header className="header d-none d-sm-flex flex-column">
    <h1 className="mt-3">
        <i className={`fa fa-${props.icon}`}></i> {props.title}
    </h1>
    <p className="lead text-muted">{props.subtitle}</p>
</header>
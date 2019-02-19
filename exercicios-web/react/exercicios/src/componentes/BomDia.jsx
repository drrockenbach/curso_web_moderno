import React, { Fragment } from 'react';
// import React from 'react';

export default props => 
    <Fragment>
        <h1>Bom Dia {props.nome}! Idade: {props.idade}</h1>
        <h2>Até logo</h2>
    </Fragment>    


// Como última opção utilizar array para retornar mais de uma tag. preferir Fragment
// export default props => 
//     [
//         <h1 key="bomDia">Bom Dia {props.nome}! Idade: {props.idade}</h1>,
//         <h2 key="ateLogo">Até logo</h2>
//     ]
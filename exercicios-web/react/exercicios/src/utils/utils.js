import React from 'react';

// Pega todos os parâmetros do pai e cria filhos, utilizando as propriedades do pai, e as do filho. 
// Caso as props do filho e do pai sejam iguais, as do filhos irão sobreescrever as do pai

export function childrenWithProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            ...props, ...child.props
        })
    })
}
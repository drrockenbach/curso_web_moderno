
let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global) // nesse contexto, o this dentro da função será global, ou seja, as alterações com o this não terão o escopo da funtion.
                       // Como global, neste caso, se entende escopo geral mesmo, não apenas deste módulo arquivo. É como o window do browser

const obj = []

comparaComThis = comparaComThis.bind(obj); // Neste caso, como está sendo feio o bind para o obj, o contexto do this dentro da function será o obj, 
                                           // não sendo mais global, conforme comprova os dois testes abaixo;

comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) // Com arrow function, o contexto deixa de ser global e passa a ter escopo do módulo. 
                                                               // Como de fosse no java o contexto de class
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) // Neste caso, diferente de uma function normal, com arrow function o contexto do this não muda, continua sendo do módulo.

comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
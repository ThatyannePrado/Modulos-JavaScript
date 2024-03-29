/*Crie uma função chamada `mostraIdade`,
 que recebe `nome` e `idade` e retorna a string: 
 `A idade de ${nome} é ${idade}`; */

 function mostraIdade (nome, idade) {
    return `A idade de ${nome} é ${idade}`;
 }

 /*Siga o mesmo padrão para outras funções como 
 `mostraCidade` e `mostraHobby` */

 function mostraCidade (nome, cidade) {
    return `A cidade de ${nome} é ${cidade}`;
 }

 function mostraHobby (nome, hobby) {
    return `O hobby de ${nome} é ${hobby}`;
 }

 //exporta

 export {
    mostraCidade,
    mostraHobby,
    mostraIdade
 }

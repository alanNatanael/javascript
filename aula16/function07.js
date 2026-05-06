/* ARROW FUNCTION */

const dobrar = (n) => n * 2;
console.log(dobrar(10))

const saudacao = (nome) => {
    const mensagem = `Olá, ${nome}!`;
    return mensagem;
}
console.log(saudacao('Alan'))

const saudacao = (nome) => `Olá, ${nome}!`
console.log(saudacao('Alan'))
/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem-vindo(a) ao jogo de blackjack")
let rodada = confirm("quer começar uma nova rodada")

if (rodada) {

    j1 = comprarCarta()
    j2 = comprarCarta()
    pc1 = comprarCarta()
    pc2 = comprarCarta()
    pj = j1.valor + j2.valor
    ppc = pc1.valor + pc2.valor

   console.log("jogador - cartas:", j1.texto, j2.texto, "-", pj, )
   console.log("Computador - cartas:", pc1.texto, pc2.texto, "-", ppc, )

   if (pj > ppc) {console.log("O usuário ganhou!")}
    else if (ppc > pj) {console.log("O computador ganhou!")} 
    else if (pj === ppc) {console.log("Empate!")}

} else {console.log("O jogo acabou")}
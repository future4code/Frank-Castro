////////---------------????????---------------////////////////---------------????????---------------////////////////---------------????????---------------////////
//--1--//

// a.  false
// b.  false
// c.  true
// e.  boolean

//--2--//

//a. Undefined
//b. null
//c. 11
//d. 3
//e.(11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// 0: 3
// 1: 19
// 2: 5
// 3: 6
// 4: 7
// 5: 8
// 6: 9
// 7: 10
// 8: 11
// 9: 12
// 10: 13
//f. 9

//-------------------------------------//////////---------------????????---------------////////////////---------------????????---------------////////

//--1--//

// const idade = prompt ("qual sua idade?")
// console.log(idade)

// const idadem = prompt ("qual a idade do seu melhor amigo?")
// console.log(idadem)

// window.alert ("Sua idade é maior do que a do seu melhor amigo?")
// console.log("Sua idade é maior do que a do seu melhor amigo?")

// const maior = Number(idade) > Number(idadem) 
// console.log("você é mais velho que seu amigo?", maior)

// const diferença = Number(idade) - Number(idadem)
// console.log("a diferença de idade é: ", diferença)

//--2--//

// const par = prompt ("insira um número par") 
// Number(par)
// console.log(par)

// const divisao = par/2  
// console.log(divisao)

//o padrão é que sempre é metade pois estou dividindo por 2
//quando divido um número impar ele coloca o resultado com virgula 

//--3--//

// let listaDeTarefas = []

// const PlistaDeTarefas = prompt("Qual sua primeira tarefa?")
// const SlistaDeTarefas = prompt("Qual sua segunda tarefa?")
// const TlistaDeTarefas = prompt("Qual sua terceira tarefa?")
// listaDeTarefas.push(PlistaDeTarefas)
// listaDeTarefas.push(SlistaDeTarefas)
// listaDeTarefas.push(TlistaDeTarefas)
// console.log(listaDeTarefas)

// const indice = prompt("remova uma tarefa")
// listaDeTarefas.splice(indice)

// console.log(listaDeTarefas) 

//--4--//

// const nome = prompt("qual seu nome?")
// console.log(nome)

// const email = prompt("qual seu email?")
// console.log(email)

// window.alert(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`)

////////---------------condicionais---------------////////////////---------------????????---------------////////////////---------------????????---------------////////

//--1--//

/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)
//ate essa parte dá pra ver que a variavel "respostaDoUsuario" foi convertida para number 
if(numero % 2 === 0) {
  console.log("Passou no teste.")
//que foi posta uma condição onde para o código ser executado o numero posto deve ter resto 0 numa divisão por 2  
} else {
  console.log("Não passou no teste.")
}
//esta parte é executada quando o resto da divisão não é
*/

//--2--//

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//A. este código serve para identificar o preço de cada fruta 
//B. O preço da fruta  Maçã  é  R$  2.25
//C. index.js:124 O preço da fruta  Pêra  é  R$  5

//--3--//

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//A. está criando um prompt que vai converter o tipo doque for escrito para number 
//B. se o numero for 10 será dito "Esse número passou no teste" se for -10 será "Essa mensagem é secreta!!!"
//C. o ploca pai não consegue entrar no bloco filho 

//--4--//

// const idade = Number(prompt("Quantos anos você tem meu jovem?"))

// if(idade >= 18) {
//     window.alert("Você pode dirigir")
//     console.log("Você pode dirigir")
// } 
// else {
//     window.alert("Você não pode dirigir.")
//     console.log("Você não pode dirigir.")
// }

//--5--//

// const turno = prompt("DIGITE M (matutino) ou V (Vespertino) ou N (Noturno)")

// if (turno === 'M' ) {
//     window.alert("Bom Dia!")
//     console.log("Bom Dia!")
// } else if (turno === 'V' ) {
//     window.alert("Boa Tarde!")
//     console.log("Boa Tarde!")
// } else if (turno === 'N' ) {
//     window.alert("Boa Noite!")
//     console.log("Boa Noite!")
// }

//--6--//

// const turno = prompt("DIGITE M (matutino) ou V (Vespertino) ou N (Noturno)")

// switch (turno) {

//     case 'M':
//         window.alert("Bom Dia!")
//         console.log("Bom Dia!")
//     break
    
//     case 'V':
//         window.alert("Boa Tarde!")
//         console.log("Boa Tarde!")
//     break

//     case 'N':
//         window.alert("Boa Noite!")
//         console.log("Boa Noite!")
//     break

// }

//--7--//

// const filme = 'fantasia'
// const valor = '15'

// if (filme === 'fantasia' && valor === '15') {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }

////////---------------LOOPS---------------////////////////---------------????????---------------////////////////---------------????????---------------////////

//--1--//

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// em "let i = 0" é o começo, logo depois "i < 5" é a condição e depois vem o "i++" que é o incremento 
//o resultado é 10

//--2--//

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//A. ele vai ler todos os elementos do array 
//B. não mostra 

//--3--//

//A.

// const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for(let i = 0; i < numeros.length; i++ ) {
//     console.log(numeros[i])
// }

//B. 

// const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for(let i = 0; i < numeros.length; i++ ) {
//     console.log(numeros[i]/10)
// }

//C. 

// const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let novoArray = []

// for(let i = 0; i < numeros.length; i++ ) {
//     if(numeros[i] %2 === 0) {
//         novoArray.push(numeros[i])
//     }
// console.log("index/posição do elemento no array", i)
// console.log("elementos do array", numeros[i])
    
// }    
// console.log(novoArray)

//D. 

// const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for(let i = 0; i < numeros.length; i++ ) {

// console.log("O elemento do índex ", i ,"é: ", numeros[i] )

// }    

//E. 

// const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maiorNumer = 0;
// let menorNumer = numeros[0];

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] > maiorNumer) {
//         maiorNumer = numeros[i]
//     } else if (numeros[i] < menorNumer) {
//         menorNumer = numeros[i]
//     }
// }

// console.log("o maior numero é:", maiorNumer)
// console.log("o menor numero é:", menorNumer)

////////---------------????????---------------////////////////---------------????????---------------////////////////---------------????????---------------////////

//Exercício 1

function inverteArray(array) {
   let numbers = [0, 8, 23, 16, 10, 15, 41, 12, 13];
   numbers.reverse();  
   return numbers
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   const numbers = [1, 2, 3, 4, 5, 6]
   
   const numerosPares = numbers.filter((num) => {
   return num % 2 === 0
})
   const elevado = numerosPares.map(num => num ** 2)
   return elevado

}

//Exercício 3

function retornaNumerosPares (array) {
   const numbers = [1, 2, 3, 4, 5, 6];
   const numerosPares = numbers.filter((num) => {
   return num % 2 === 0
})
return numerosPares
}

//Exercício 4

function retornaMaiorNumero(array) {
   const numbers = [10, 18, 7, 56, 39]
   let maior = Math.max.apply(null, numbers );
   return maior
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   const numbers = [1, 2, 3, 4, 5, 6]
   return numbers.length
   
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const falseTrue = [false, false, true, true, true]
   return falseTrue
}

//Exercício 7

function retornaNNumerosPares(n) {
 const pares = [ 0, 2, 4, 6, 8 ]
 return pares
}

// Exercício 8

function checaTriangulo(a, b, c) {
   // if (checaTriangulo(2, 3, 4) === 'Escaleno') {
   //    return 'Equilátero';
     
   // }
   // if (checaTriangulo(20, 20, 20) === 'Equilátero') {
   //    return 'Isósceles'; 
      
   // }
   // if (checaTriangulo(10, 10, 20) === 'Isósceles') {
   //    return 'Escaleno';
   // }


}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // const output =  { maiorNumero: 30, maiorDivisivelporMenor: true, diferenca: 15 }
   
   comparaDoisNumeros(15, 30)
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas(pessoas) {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
   // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

function retornaEmailConsulta(consultas) {
  // implemente sua lógica aqui
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}
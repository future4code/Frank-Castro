const nome = process.argv[2];
const idade = Number(process.argv[3])
const futura = Number(idade + 7)

if(!idade){
    console.log("Você precisa preencher a informação de idade.")
}else{
    console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${futura}`);
}
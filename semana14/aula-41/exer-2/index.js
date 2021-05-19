const numberUne = Number(process.argv[2]);
const numberTow = Number(process.argv[3]);

const operacao = process.argv[4]
let result = 0

switch(operacao){

	case "add":
		result = numberUne + numberTow
		break;
	case "sub":
		result = numberUne - numberTow
		break;
    case "mult":
		result = numberUne * numberTow
		break;
    case "div":
		result = numberUne / numberTow
		break;    
}
 
console.log(`Resultado: ${result}`);

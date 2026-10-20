alert ('Bem vindo ao jogo do numero secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log( numeroSecreto);
let chute
let tentativas = 0;

while(chute != numeroSecreto){
    chute = prompt("Digite um número de 1 a 9999999");


if (chute == numeroSecreto){
    break;
    alert(`Você acertou! O numero secreto é ${numeroSecreto} com total de ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }


    }
    tentativas++;
}

let PalavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você acertou! O numero secreto é ${numeroSecreto} com total de ${tentativas} ${PalavraTentativa}`);
//if (tentativas > 1){
  //alert(`Você acertou! O numero secreto é ${numeroSecreto} com total de ${tentativas} tentativas`);
//} else {
  //   alert(`Você acertou! O numero secreto é ${numeroSecreto} com total de ${tentativas} tentativa`);
//}
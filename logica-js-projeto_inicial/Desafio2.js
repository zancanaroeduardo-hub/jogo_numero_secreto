let diasdasemana = prompt("Qual o dia da semana?");
if (diasdasemana == "Sábado"){
    alert ("Bom final de semana!");
} else if (diasdasemana == "Domingo"){
    alert ("Bom final de semana!");
} else {
    alert("Boa semana!");
}

//Exercício 2
let Numero = prompt("Digite um número: ");
if (Numero > 0){
    alert (`O número ${Numero} é positivo`);
} else if (Numero < 0 ){
    alert (`O número ${Numero} é negativo`)
} else {
    alert ("O número é zero");
}   

let pontuacao = prompt ("Digite sua pontuação");
if (pontuacao > 100){
    alert (`Parabéns, você venceu e sua pontuação foi ${pontuacao}`)
} else if (pontuacao < 100){
    alert (`Seu inútil, sua pontuação foi ${pontuacao} e você perdeu`)
}
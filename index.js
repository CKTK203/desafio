let nome = "Hero";
let qtdDeExp = 7000;
let nivel = "";
const xp = "Se XP for ";

if(qtdDeExp < 1000){
    nivel = "ferro"
    console.log(xp + "menor do que 1000 = Ferro");
}
else if(qtdDeExp > 1001 && qtdDeExp < 2000){
    nivel = "bronze"
    console.log(xp + "entre 1001 e 2000 = Bronze");
}
else if(qtdDeExp > 2001 && qtdDeExp < 5000){
    nivel = "prata"
    console.log(xp + "entre 2001 e 5000 = Prata");
} 
else if(qtdDeExp > 6001 && qtdDeExp < 7000){
    nivel = "ouro"
    console.log(xp + "entre 6001 e 7000 = Ouro");
}
else if(qtdDeExp > 7001 && qtdDeExp < 8000){
    nivel = "platina"
    console.log(xp + "entre 7001 e 8000 = Platina");
}
else if(qtdDeExp > 8001 && qtdDeExp < 9000){
    nivel = "ascendente"
    console.log(xp + "entre 8001 e 9000 = Ascendente");
}
else if(qtdDeExp > 9001 && qtdDeExp < 10000){
    nivel = "imortal"
    console.log(xp + "entre 9001 e 10000");
}
else if(qtdDeExp >= 10001){
    nivel = "radiante"
    console.log(xp + "maior ou igual a 10001 = Radiante");
}
nivelMsg = ("Nível de " + nivel);
console.log(nivelMsg);
console.log("O herói de nome " + nome + " está no nível de " + nivel );
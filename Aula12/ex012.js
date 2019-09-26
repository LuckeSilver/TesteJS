var horaAtual = new Date();
var hora = horaAtual.getHours;
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <12){
    console.log("Bom Dia!")
} else if (hora <18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
} //alteração de teste do vscode
var teste = "vscode";
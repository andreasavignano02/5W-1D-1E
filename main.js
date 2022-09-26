// Variabili
let ora = new Date();
ora.getHours();
let gg, mm, aaaa;
gg = ora.getDate() + "/";
mm = ora.getMonth() + 1 + "/";
aaaa = ora.getFullYear();

// Funzioni
function oraTotale() {
    document.getElementById("visione").innerHTML = ora
}
function vediOra(){
document.getElementById("ora").innerHTML = ora.getHours()
}
function visioneFormato() {
    document.getElementById("formatoEur").innerHTML = ("Oggi è il "+ gg + mm + aaaa)
}
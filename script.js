/*il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 */

var kmPercorsi = parseInt(prompt("quanti chilometri devi percorrere?"));
console.log("Km tragitto",kmPercorsi);
var etàPasseggero = parseInt(prompt("quanti anni hai?"));
console.log("Età passeggero", etàPasseggero);
var prezzoIntero = (0.21 * kmPercorsi).toFixed(2);
console.log("prezzo intero", prezzoIntero);
var prezzoScontoOver = (prezzoIntero - ((prezzoIntero / 100) * 40)).toFixed(2);
console.log("biglietto scontato Over", prezzoScontoOver);
var prezzoScontoJunior = (prezzoIntero - ((prezzoIntero / 100) * 20)).toFixed(2);
console.log("biglietto scontato Junior", prezzoScontoJunior);




if (kmPercorsi === "" || etàPasseggero === "") {
    alert("manca campo obligatorio")
} else if (Number.isNaN(kmPercorsi) || Number.isNaN(etàPasseggero)) {
    alert ("i km da percorrere e la vostra età vanno inseriti in cifre")    
} else { 
    var prezzoBiglietto;
    if (etàPasseggero <= 17) { 
        console.log(prezzoBiglietto = prezzoScontoJunior + "€")
    } else if (etàPasseggero > 65) { 
        console.log(prezzoBiglietto = prezzoScontoOver + "€")
    } else {
        console.log(prezzoBiglietto = prezzoIntero + "€")
    }
}

document.getElementById("prezzo-finito").innerHTML= prezzoBiglietto;
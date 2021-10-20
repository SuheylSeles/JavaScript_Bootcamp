console.log("Merhaba, Süheyl SELEŞ ! ")

// var dolarDun = 9.20
// var dolarBugun = 9.21

// JS type safe değildir.

let dolarBugun = 9.3

var dolarDun = 9.2 // let olursa burası alacak.

{
    var dolarDun = 9.15 // var olursa burayı alacak.
}

console.log(dolarDun)

const euroDun = 11.1

// euroDun = 11 bunu kullanamıyoruz ! 

console.log(euroDun)

// array

let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]

console.log(konutKredileri)

console.log("<ul>")

for(let i =0; i<konutKredileri.length; i++ ){
 console.log("<li>" + konutKredileri[i] + "<li>")
}

console.log("<ul>")



// Ctrl + K + C
// + Merhaba
// - Merhaba
// + Görüşürüz
// - Eyvallah

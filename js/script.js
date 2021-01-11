function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

var numeriPc = [];
var numeriUtente = [];

while (numeriPc.length<16) {
  var random = randomNumber(1, 100);
  console.log(random);
  if (numeriPc.includes(random)=== false) {
    numeriPc.push(random);
  }else{
    console.log('numero già esistente');
  }
}
console.log(numeriPc);

while (numeriUtente.length<84) {
  var sceltaUtente = prompt('Inserisci un numero da 1 a 100')
  switch (sceltaUtente) {
    case sceltaUtente > 100 || sceltaUtente < 1:
      alert('Solo numeri compresi tra 1 e 100');
      break;
    case numeriPc.includes(sceltaUtente)=== true:
      alert('Mi dispiace, hai perso');
      break;
    case numeriUtente.includes(sceltaUtente)=== false:
      numeriUtente.push(sceltaUtente);
      break;
    case numeriUtente.includes(sceltaUtente)=== true:
      alert('Non puoi inserire lo stesso numero');
      break;
    case numeriUtente === 84:
      alert('Complimenti hai vinto')
    default:

  }
}

// while (numeriUtente.length<4) {
//   var sceltaUtente = prompt('Scegli un numero')
//   if (numeriPc.includes(sceltaUtente)=== false) {
//     numeriUtente.push(sceltaUtente)
//   }else {
//     console.log('Hai perso')
//   }
//   // if (numeriUtente.length === 4) {
//   //   alert('Bravo hai vinto')
//   // }
// }
// console.log(numeriUtente);
//
//
// // else if (numeriUtente.includes(sceltaUtente)=== true) {
// //   alert('Non puoi inserire due volte lo stesso numero')

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
  var sceltaUtente = parseInt(prompt('Inserisci un numero da 1 a 100'));
  if (sceltaUtente > 100 || sceltaUtente < 1) {
    alert('Solo numeri compresi tra 1 e 100');
    break;
  }else if (numeriPc.includes(sceltaUtente)=== true) {
    alert('Mi dispiace, hai perso');
    break;
  }else if (numeriUtente.includes(sceltaUtente)=== true) {
    alert('Non puoi inserire lo stesso numero');
    break;
  }else if (numeriUtente.includes(sceltaUtente)=== false) {
    numeriUtente.push(sceltaUtente);
  }
  if (numeriUtente.length === 84) {
    alert('Complimenti hai vinto');
  }
  console.log(numeriUtente);
}

// while (numeriUtente.length<8) {
//   var sceltaUtente = parseInt(prompt('Inserisci un numero da 1 a 100'));
//   if (numeriUtente.includes(sceltaUtente)=== false) {
//     numeriUtente.push(sceltaUtente);
//   }else if (numeriUtente.includes(sceltaUtente)=== true) {
//     alert('Non puoi inserire lo stesso numero');
//   }else if (sceltaUtente > 100 || sceltaUtente < 1) {
//     alert('Solo numeri compresi tra 1 e 100');
//   }else if (numeriPc.includes(sceltaUtente)=== true) {
//     alert('Mi dispiace, hai perso');
//   }else if (numeriUtente.length === 16) {
//     alert('Complimenti hai vinto');
//   }
//
// }
// console.log(numeriUtente);

// while (numeriUtente.length<16) {
//   console.log('siamo nel while');
//   var sceltaUtente = parseInt(prompt('Inserisci un numero da 1 a 100'));
//   switch (sceltaUtente) {
//     case numeriUtente.includes(sceltaUtente)=== true:
//       alert('Non puoi inserire lo stesso numero');
//       break;
//     case sceltaUtente > 100 || sceltaUtente < 1:
//       alert('Solo numeri compresi tra 1 e 100');
//       break;
//     case numeriPc.includes(sceltaUtente)=== true:
//       alert('Mi dispiace, hai perso');
//       break;
//     case numeriUtente === 16:
//       alert('Complimenti hai vinto');
//       break;
//     case numeriUtente.includes(sceltaUtente)=== false:
//       numeriUtente.push(sceltaUtente);
//       break;
//
//   }
//   console.log(numeriUtente);
// }

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

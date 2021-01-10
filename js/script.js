function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

var numeriPc = [];
var numeriUtente = [];

while (numeriPc.length<16) {
  var random = randomNumber(1, 20);
  console.log(random);
  if (numeriPc.includes(random)=== false) {
    numeriPc.push(random);
  }else{
    console.log('numero già esistente');
  }
}
console.log(numeriPc);

while (numeriUtente.length<4) {
  var sceltaUtente = prompt('Scegli un numero')
  if (numeriPc.includes(sceltaUtente)=== false) {
    numeriUtente.push(sceltaUtente)
  }else {
    console.log('Hai perso')
  }
  // if (numeriUtente.length === 4) {
  //   alert('Bravo hai vinto')
  // }
}
console.log(numeriUtente);


// else if (numeriUtente.includes(sceltaUtente)=== true) {
//   alert('Non puoi inserire due volte lo stesso numero')

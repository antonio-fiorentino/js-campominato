function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

var numeri = [];

while (numeri.length<16) {
  var random = randomNumber(1, 30);
  console.log(random);
  if (numeri.includes(random)=== false) {
    numeri.push(random);
  }else{
    console.log('numero già esistente');
  }
}

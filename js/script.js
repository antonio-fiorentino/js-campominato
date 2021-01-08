function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;

}

var numeri = [];

for (var i = 1; i <= 16; i++) {
  var random = console.log(randomNumber(1, 100));
  numeri.push(random);
}

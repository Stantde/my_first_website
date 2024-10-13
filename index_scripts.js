let randomNumber = false;
console.log(randomNumber);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

if ( ! (randomNumber)){
	randomNumber = getRandomInt(100) + 1;
}

console.log("Hello, World!");


console.log(randomNumber);


let randomNumber = false;
console.log(randomNumber);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function checkGuess(userGuess){
  let number = document.getElementById("user_guess1").value;
  if(number == ''){
     document.querySelector(".errorResponse").innerHTML = "There's nothing here, you donut!";
     document.querySelector(".validResponse").innerHTML = "";
     console.log("There's nothing here, you donut!");
  } else if (number > randomNumber){
    document.querySelector(".errorResponse").innerHTML = "";
    document.querySelector(".validResponse").innerHTML = "That number: " + number + " is too high!";
    console.log("too high");
  } else if (number < randomNumber){
      document.querySelector(".errorResponse").innerHTML = "";
      document.querySelector(".validResponse").innerHTML = "That number: " + number + " is too low!";
      console.log("too low");
  } else if ( number == randomNumber){
      document.querySelector(".errorResponse").innerHTML = "";
      document.querySelector(".validResponse").innerHTML = "That's correct!";
      console.log("got it");
  }
}

if ( ! (randomNumber)){
	randomNumber = getRandomInt(100) + 1;
}

console.log("Hello, World!");


console.log(randomNumber);


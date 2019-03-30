

// 6. How to reveal letters as they are guessed 



// variables to track
var wins = 0;
var turnsLeft = 12;
var incorrectGuess=[];
var correctGuess = [];
var wordtoGuess= [];
var wordUnderscores = [];
var wordBank = ['Katmandu', 'Paris', 'Helsinki', 'Nairobi', 'Tokyo'];
var usedLetter= [];
var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

//<---------------------------------------FUNCTIONS------------------------------------>

//computer picks a random word
window.onload = function () {
   wordToGuess = wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase().split("");
   console.log(wordToGuess);
   for (i = 0; i < wordToGuess.length; i++) {
      wordUnderscores.push(" __");
   }
   console.log(wordUnderscores);
   document.getElementById("word-answer").innerHTML = wordUnderscores.join(""); 
   checkForWin();
     
}

//game reset function after a word is guessed or turns = 0
function reset() {
   turnsLeft = 12;
   incorrectGuess.length = 0;
   correctGuess.length = 0;
   var compGuess = wordToGuess[Math.floor(Math.random() * wordToGuess.length)];
   wordToGuess.push(compGuess);
};

// Displays letter if it's in word
function displayLetter(playerGuess) {
	// for each char in wordUnderScore, if matches playerGuess --> display
	for (i = 0; i < wordToGuess.length; i++) {
		if (playerGuess === wordToGuess[i]) {
			wordUnderscores.push(playerGuess);
			console.log(wordUnderscores);
		}
	}
	document.getElementById("word-answer").innerHTML = wordUnderscores.join("");

};


// Checks for win by looking for "_"
function checkForWin() {
	if ((wordUnderscores.indexOf(" __") === -1) && (turnsLeft > 0)){
		alert("You got it! The correct answer is " + wordToGuess);
		wins++;
		reset();
	}else if (turnsLeft > 9) {
      reset();
   }
};

//<------------------------------The Game ---------------------------------->

// players guess
document.onkeyup = function (event) {
   var playerGuess = event.key.toLowerCase();
   console.log(playerGuess);

//no duplicate letters
     if(!alphabet.includes(playerGuess)){
         alert("click a letter only")
         return;
     }

         if(usedLetter.includes(playerGuess)){
            alert("letter used already");
            return;
        } else{
            usedLetter.push(playerGuess);
            console.log(usedLetter);
         };

   var status = false;

     for(var i=0; i < wordToGuess.length; i++){
        if(playerGuess === wordToGuess[i]){
         wordUnderscores[i] = wordToGuess [i];
         status = true;
         console.log(wordToGuess);
         // turnsLeft--;
         displayLetter();
        
      }
   }

   if(status===false){
      turnsLeft--;
   }
     
         
         
          
          
      
        
      



  

var html =
             "<p>Wins: " + wins + "</p>" +
             "<p>Wrong Letters: " + incorrectGuess + "</p>" +
            "<p>Guesses left: " + turnsLeft + "</p>";


document.getElementById("game").innerHTML = html;

}
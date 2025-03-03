var readlineSync = require('readline-sync');

var score = 0;

//input 
var username = readlineSync.question("what's your name? ");

console.log("welcome " + username +  " do you know me?");


//play function
function play(question, answer){
 var userAnswer = readlineSync.question(question);

if (userAnswer === answer){
  console.log("right!");
  score = score + 1;

}else{
  console.log("wrong!");
}

console.log("current score: ", score);
console.log("_______________")

}
//array of objects
var questions = [{
  question: "where do i live?",
  answer: "vadodara"
},
{
  question: "my favourite superhero would be?",
  answer: "tanjiro"
},
{
  question: "where do i study?",
  answer: "parul university"  
},{
  question: "my favourite food?",
  answer: "pani puri"
},{
  question: "my favourite sport?",
  answer: "cricket"
},{
  question: "my favourite anime?",
  answer: "DEMON SLAYER"
},{
  question: "my favourite song?",
  answer: "bade tu chal"
}];

//loop
for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("YAY! you scored: ", score); 
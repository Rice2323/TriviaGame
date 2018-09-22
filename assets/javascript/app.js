var correctAnswers;
var remainingQuesions;
var questionAsked;
var answers;
var pick;
var intervalId;
var counter = 10;
var chooseRandomAnswer;



var askQuestion = $("#questionsBox");
var askAnswers = $("#answerList");



var questionSet = [
    {question: "Aquaman is the King of what city?",
    choices: ["Atlantis", "Wakanda", "Themyscira", "Metropolis"]
    },
    {question: "Who is Wonder Woman's father?",
    choices: ["Zeus", "Poseidon", "Ares", "Perseus"]
    },
    {question: "Who is Shazam?",
    choices: ["Billy Batson", "Clark Kent", "Bruce Wayne", "Jon Stewart"]
    },
    {question: "What is the name of Batmans secret hideout?",
    choices: ["Batcave", "Batden", "Batroom", "Batcage"]
    },
    {question: "What superpower does Superman NOT have?",
    choices: ["Telepathy", "Super Strength", "Flight", "X-Ray Vision"]
    },
    {question: "Who was never Flash?",
    choices: ["Paul Blart", "Wally West", "Barry Allen", "Jay Garrick"]
    },
    {question: "Who is not a villian of Batman?",
    choices: ["Elastic Man", "The Joker", "Bain", "The Riddler"]
    },
    {question: "What did Victor Stone do before he became Cyborg?",
    choices: ["Play Professional Football", "Doctor", "Lawyer", "Computer Scientist"]
    },
    {question: "Green Lantern's power is based on his?",
    choices: ["Will Power", "Intelligence", "Fear", "Happiness"]
    },
    {question: "Which character is NOT capable of flight?",
    choices: ["Green Arrow", "Cyborg", "Superman", "Green Lantern"]
    }

];

var selector = questionSet.length;
var selected = 4;

console.log(questionSet[1].choices);
console.log(selected);





function timeStart(){
    clearInterval(intervalId);
    intervalId = setInterval(countDown, 1000);
    }
    
    function countDown(){
    
    
    $("#timerBox").html("<h2>Time Remaining: </h2>" + counter);
    counter--;

    if (counter === 0 ){
        nextQuestion();
        counter = 10;
        timeStart();
    }
    
    }

    
    
    function nextQuestion(){
        clearInterval(intervalId);
    }

    function pullQuestion(){
        pick = Math.floor(Math.random()* selector);
        questionAsked = questionSet[pick].question;
        askQuestion.html(questionAsked);
        console.log(questionAsked);
        function generateAnswers(){
            for (var j = 0; j<4; j++){
             
                chooseRandomAnswer = Math.floor(Math.random()* selected);
                answers = questionSet[pick].choices[chooseRandomAnswer];
                askAnswers.append("<li>"+answers+"</li>");
                questionSet[pick].choices.splice(chooseRandomAnswer,1);
                selected--;
            }
            selected = 4;
        }
        generateAnswers();
        
        
        questionSet.splice(pick,1);
        selector--;
        
        
        
        }

function askNow(){
    
Questions = setInterval(pullQuestion, 10000);


}

function startQuiz(){
 {
    timeStart();
    askNow();
    askQuestion.html("");
    
    
    







}
}

startQuiz();


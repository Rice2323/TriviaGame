var correctAnswers = 0;
var remainingQuestions = 10;
var questionAsked;
var answers;
var pick;
var intervalId;
var counter = 8;
var chooseRandomAnswer;
var userSelection;



var askQuestion = $("#questionsBox");
var askAnswers = $("#answerList");
var questionsLeft = $("#remainingBox");
var questionsCorrect = $("#correctBox");



var questionSet = [
    {
        question: "Aquaman is the King of what city?",
        choices: ["Atlantis", "Wakanda", "Themyscira", "Metropolis"]
    },
    {
        question: "Who is Wonder Woman's father?",
        choices: ["Zeus", "Poseidon", "Ares", "Perseus"]
    },
    {
        question: "Who is Shazam?",
        choices: ["Billy Batson", "Clark Kent", "Bruce Wayne", "Jon Stewart"]
    },
    {
        question: "What is the name of Batmans secret hideout?",
        choices: ["Batcave", "Batden", "Batroom", "Batcage"]
    },
    {
        question: "What superpower does Superman NOT have?",
        choices: ["Telepathy", "Super Strength", "Flight", "X-Ray Vision"]
    },
    {
        question: "Who was never Flash?",
        choices: ["Paul Blart", "Wally West", "Barry Allen", "Jay Garrick"]
    },
    {
        question: "Who is not a villian of Batman?",
        choices: ["Elastic Man", "The Joker", "Bain", "The Riddler"]
    },
    {
        question: "What did Victor Stone do before he became Cyborg?",
        choices: ["Play Professional Football", "Doctor", "Lawyer", "Computer Scientist"]
    },
    {
        question: "Green Lantern's power is based on his?",
        choices: ["Will Power", "Intelligence", "Fear", "Happiness"]
    },
    {
        question: "Which character is NOT capable of flight?",
        choices: ["Green Arrow", "Cyborg", "Superman", "Green Lantern"]
    }

];

var backgroundImages = [

    'url(assets/images/Batman.jpg)', 'url(assets/images/greenlantern.jpg)',
    'url(assets/images/wonderwoman.jpg)', 'url(assets/images/superman.jpg)', 'url(assets/images/SuperFriends.jpg)', 'url(assets/images/shazam.png)', 'url(assets/images/JusticeLeague.jpg)',
];

var selector = questionSet.length;
var selected = 4;
var arrayCopy = questionSet;








function timeStart() {
    changeBackground();
    clearInterval(intervalId);
    intervalId = setInterval(countDown, 1000);
}

function countDown() {

    counter--;
    var time = counter + 1;
    $("#timerBox").html("Time Remaining: " + time);


    if (counter < 0) {
        counter = 8;
        timeStart();
        pullQuestion();
    }

}


function pullQuestion() {
    pick = Math.floor(Math.random() * selector);
    questionAsked = questionSet[pick].question;
    askQuestion.html(questionAsked);
    console.log(questionAsked);
    function generateAnswers() {
        for (var j = 0; j < 4; j++) {

            chooseRandomAnswer = Math.floor(Math.random() * selected);
            answers = questionSet[pick].choices[chooseRandomAnswer];
            askAnswers.append("<li>" + answers + "</li><br>");
            questionSet[pick].choices.splice(chooseRandomAnswer, 1);
            selected--;
        }

        selected = 4;
    }
    correctChoice = arrayCopy[pick].choices[0];
    $("ol").empty();
    generateAnswers();


    questionSet.splice(pick, 1);
    selector--;
    $("li").on("click", function () {
        userSelection = $(this).text();
        console.log(userSelection);

        if (userSelection === correctChoice) {
            correctAnswers++;
            questionsCorrect.html("Correct Answers: " + correctAnswers);
            remainingQuestions--;
            questionsLeft.html("Remaining Questions: " + remainingQuestions);
            counter = 0;
        }

        else {
            remainingQuestions--;
            questionsLeft.html("Remaining Questions: " + remainingQuestions);
            counter = 0;

        }

        if (remainingQuestions === 0) {

            alert("You have answered " + correctAnswers + " out of 10 correct!");
            
            startQuiz();
        }

    });





}

function changeBackground() {
    var picker = Math.floor(Math.random() * backgroundImages.length);
    $('body').css('background-image', backgroundImages[picker]);
}


function startQuiz() {
    {
        timeStart();
    }
}

startQuiz();




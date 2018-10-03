$(document).ready(function() {

$("#start").on("click", function() {
    game.start();
})

$(document).on("click", "#done", function() {
    game.done();
})

var questions = [
    {
        question: "Bicycling is the official sport of the state of Illinois.",
        answers: ["True", "False"], 
        correctAnswer: "True"
    },
    {
        question: "Chicago's Divvy bike share program is the largest bike share program in the United States.",
        answers: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "In the late 1800s Chicago was home to more than 70 bicycle manufacturers.",
        answers: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Pedicabs are banned from riding on Michigan Avenue and State Street in downtown Chicago.",
        answers: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Cyclists have the same rights as motorists and must follow the rules applicable to a motorist.",
        answers: ["True", "False"],
        correctAnswer: "True"
    }];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 60, 
    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("Time's Up!");
            game.done();
        }
    },
    start: function() {
        timer = setInterval(game.countdown, 1000);
        $("#game").prepend(<h3>Time Remaining: <span id="counter">60</span> seconds</h3>);
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#game").append("<p>" + questions[i].question + "</p>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#game").append("<input type='radio' name='question-'" + i + "' value=' " +  questions[i].answers[j] +"' >" + questions[i].answers[j])
            }
        }
    
    $("#game").append("<br><button id="done">DONE</button></br>")
    },
    done: function() {
        $.each($("input[name="question-0"]:checked"), function() {
            if ($(this).val() === questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
            console.log(this.value);
        });
        $.each($("input[name="question-1"]:checked"), function() {
            if ($(this).val() === questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name="question-2"]:checked"), function() {
            if ($(this).val() === questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name="question-3"]:checked"), function() {
            if ($(this).val() === questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name="question-4"]:checked"), function() {
            if ($(this).val() === questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },
    result: function() {
        clearInterval(timer);
        $("#game").remove();
        $("#game").html("<h3>The End</h3>");
        $("#game").append("<h3>Correct Answers: " + this.correct + "</h3>");
        $("#game").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $("#game").append("<h3>Unanswered: " + (questions.length-(this.correct + this.incorrect)) + "</h3>");
    }    


}




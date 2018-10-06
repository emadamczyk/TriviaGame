$(document).ready(function() {

    $("#start").on("click", function() {
        game.start();
    })
    
    
    $(document).on("click", "#done", function() {
        game.done();
    })
    
    var questions = [
        {
            question: "1) Bicycling is the official sport of the state of Illinois.",
            answers: ["True", "False"], 
            correctAnswer: "True"
        },
        {
            question: "2) Chicago's Divvy bike share program is the largest bike share program in the United States.",
            answers: ["True", "False"],
            correctAnswer: "False"
        },
        {
            question: "3) In the late 1800s Chicago was home to more than 70 bicycle manufacturers.",
            answers: ["True", "False"],
            correctAnswer: "True"
        },
        {
            question: "4) Pedicabs are banned from riding on Michigan Avenue and State Street in downtown Chicago.",
            answers: ["True", "False"],
            correctAnswer: "True"
        },
        {
            question: "5) Cyclists have the same rights as motorists and must follow the rules applicable to a motorist.",
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
                $("#game").prepend("<h3>Time's Up!</h3>");
                delayedAlert = setTimeout(function() {
                    game.done();
                  }, 1000);
                
            }
        },
        start: function() {
            timer = setInterval(game.countdown, 1000);
            console.log(game.counter)
            $("#game").prepend("<h3>Time Remaining: <span id='counter'> 60 </span> seconds</h3>");
            $("#start").hide();
            $("#instructions").empty();
            for (var i = 0; i < questions.length; i++) {
                $("#questions").append("<br><br><p>" + questions[i].question + "</p>");
                for (var j = 0; j < questions[i].answers.length; j++) {
                    $("#questions").append(" "+"<input type='radio' name='question-" + i + "'value='" + questions[i].answers[j] + "'>" + " " + questions[i].answers[j]);
                    //$("#game").append("<button id='choice'>" + questions[i].answers[j] + "</button>")
                }
            }
        
        $("#questions").append($("<br><br><button id='done'>DONE</button>"));
        },
        done: function() {
            //var selectedAnswer = $("input[name='question-" + i + "']:checked").val();
            //console.log(selectedAnswer);
            $.each($("input[name='question-0']:checked"), function() {
                if ($(this).val() === questions[0].correctAnswer) {
                    console.log(this);
                    game.correct++;
                } else {
                    game.incorrect++;
                }
                //console.log(this.value);
            });
            $.each($("input[name='question-1']:checked"), function() {
                if ($(this).val() === questions[1].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-2']:checked"), function() {
                if ($(this).val() === questions[2].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-3']:checked"), function() {
                if ($(this).val() === questions[3].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-4']:checked"), function() {
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
            $("#game h3").remove();
            $("#game").html("<h3>The End</h3>");
            $("#game").append("<h3>Correct Answers: " + this.correct + "</h3>");
            $("#game").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
            $("#game").append("<h3>Unanswered: " + (questions.length-(this.correct + this.incorrect)) + "</h3>");
            //$("#start").show().text("Play Again").click(function() {
              //  game.reset();
            //});
        //},   
        // attempt to insert a reset button did not work at this time. Questions kept appending themselves to the previous question list even after emptying the div
        //reset: function() {
          //  $("#game h3").remove();
            //game.start();
        }
    }
    });
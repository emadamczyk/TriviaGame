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
    }]

    
]
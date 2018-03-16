$(document).ready(function() {
    $('#play').remove();
    var count = 10;
    var questions =[{
        question: "How many official planets are in the solar system?", 
        choices: ["7", "8", "9"],
        correctAnswer: 1,
    } , {
        question: "When two full moons are in the same month, the second is called a blue moon. How often do blue moons occur?", 
        choices: ["1 1/2 to 2 years", "2 1/2 to 3 years", "4 1/2 to 5 years"],
        correctAnswer: 1,
    } , {
        question: "What color is the outermost arc on a rainbow?", 
        choices: ["Violet", "Green", "Red"],
        correctAnswer: 2,
    } , {
        question: "What is sometimes called the Evening Star and sometimes called the Morning Star?", 
        choices: ["Venus", "Mars", "Bellatrix"],
        correctAnswer: 0,
    } , {
        question: "Caroline Herschel discovered eight comets, her brother William discovered which planet?", 
        choices: ["Jupiter", "Mercury", "Uranus"],
        correctAnswer: 2,
    } , {
        question: "Miranda, Bianca, Ophelia, Portia, and Cordelia are all moons of Uranus, they are also characters in which man's plays?", 
        choices: ["Samuel Beckett", "William Shakespeare", "George Bernard Shaw"],
        correctAnswer: 1,    
    } , {
        question: "The four moons orbiting Jupiter are Io, Ganymede, Callisto, and Europa. Who discovered them?", 
        choices: ["Gallileo Galilei", "Johannes Kepler", "Nicolaus Copernicus"],
        correctAnswer: 1,  
    }]

    var triviaGame = {
        timer: 100,
        correct: 0,
        incorrect: 0,
      }
var counter = setInterval(timer, 1000);

function timer()
{
  count = count - 1;
  if (count <= 0)
  {
     triviaGame.done();
  }
  $("#timer").html(game.timer);
}
});
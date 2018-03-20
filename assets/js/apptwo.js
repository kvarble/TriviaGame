$(document).ready(function() {
    // create the click function that starts the game
$('#play').on('click', function(){
game.play();
})

$(document).on('click','#end',function(){
    game.finished();
})
    // put together array of questions with array of answers and the correct answer
      let questions = [{
        question: "How many official planets are in the solar system?", 
        answers: ["7", "8", "9"],
        correctAnswer: 1
    } , {
        question: "When two full moons are in the same month, the second is called a blue moon. How often do blue moons occur?", 
        answers: ["1 1/2 to 2 years", "2 1/2 to 3 years", "4 1/2 to 5 years"],
        correctAnswer: 1
    } , {
        question: "What color is the outermost arc on a rainbow?", 
        answers: ["Violet", "Green", "Red"],
        correctAnswer: 2
    } , {
        question: "What is sometimes called the Evening Star and sometimes called the Morning Star?", 
        answers: ["Venus", "Mars", "Bellatrix"],
        correctAnswer: 0
    } , {
        question: "Caroline Herschel discovered eight comets, her brother William discovered which planet?", 
        answers: ["Jupiter", "Mercury", "Uranus"],
        correctAnswer: 2
    } , {
        question: "Miranda, Bianca, Ophelia, Portia, and Cordelia are all moons of Uranus, they are also characters in which man's plays?", 
        answers: ["Samuel Beckett", "William Shakespeare", "George Bernard Shaw"],
        correctAnswer: 1    
    } , {
        question: "The four moons orbiting Jupiter are Io, Ganymede, Callisto, and Europa. Who discovered them?", 
        answers: ["Gallileo Galilei", "Johannes Kepler", "Nicolaus Copernicus"],
        correctAnswer: 1  
    }];

        // setup the object model for the game to run
    const game = {
        correct: 0,
        incorrect: 0,
        counter: 100,
        // create counter
        countdown: function(){
            game.counter--;
            $('#counter').html(game.counter);
            if(game.counter==0){
                game.finished();
            }
        },
        // define the play function
        play: function(){
            timer = setInterval(game.countdown,1000);
            $('#interiorContainer').prepend('<h2>Time left: <span id="counter">100</span></h2>');
            $('#play').remove();
            for(var i=0; i<questions.length; i++){
                $('#interiorContainer').append('<h2>' + questions[i].question + '<h2>');
                for (var j=0; j<questions[i].answers.length; j++){
                    $("#interiorContainer").append("<p><input type = 'radio' name='question-" + i + "'value='" + j + "'>" + questions[i].answers[j] + "<br><p>");
            }
        }
        $('#interiorContainer').append('<br><button id="end">Done!</button>')
    },
        //  define game over function, see if correct answer is checked, add to correct/incorrect tally
        finished: function(){


        for (var i=0; i<questions.length; i++){
            $.each($("input[name='question-"+i+"']:checked"), function() {
                console.log($(this).val())
            if ($(this).val()== questions[i].correctAnswer){
                game.correct++;
                console.log("hjkl"+i)
            } else { 
                game.incorrect++;
                console.log("asdf")
            }
        })
    }
    
        this.result();
        
        // create results page that replaces the questions page
        },
    
        result: function(){
            clearInterval(timer);
            $('#interiorContainer h2').remove();
            $('#interiorContainer').html("<h3>Congratulations</h3>");
            $('#interiorContainer').append("<h4>Correct Answers: "+ this.correct+"</h4>");
            $('#interiorContainer').append("<h4>Incorrect Answers: "+ this.incorrect+"</h4>");
            $('#interiorContainer').append("<h4>Unanswered questions: "+ (questions.length-(this.incorrect+this.correct))+"</h4>");
        }
    }
    

});

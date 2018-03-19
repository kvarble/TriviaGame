$(document).ready(function() {
    $('#play').on('click',function(){
        game.start();
       
      })
      $(document).on('click','#end',function(){
        game.over();
      })

    var questions = [{
        question: "How many official planets are in the solar system?", 
        answers: ["7", "8", "9"],
        correctAnswer: [1],
    } , {
        question: "When two full moons are in the same month, the second is called a blue moon. How often do blue moons occur?", 
        answers: ["1 1/2 to 2 years", "2 1/2 to 3 years", "4 1/2 to 5 years"],
        correctAnswer: [1],
    } , {
        question: "What color is the outermost arc on a rainbow?", 
        answers: ["Violet", "Green", "Red"],
        correctAnswer: [2],
    } , {
        question: "What is sometimes called the Evening Star and sometimes called the Morning Star?", 
        answers: ["Venus", "Mars", "Bellatrix"],
        correctAnswer: [0],
    } , {
        question: "Caroline Herschel discovered eight comets, her brother William discovered which planet?", 
        answers: ["Jupiter", "Mercury", "Uranus"],
        correctAnswer: [2],
    } , {
        question: "Miranda, Bianca, Ophelia, Portia, and Cordelia are all moons of Uranus, they are also characters in which man's plays?", 
        answers: ["Samuel Beckett", "William Shakespeare", "George Bernard Shaw"],
        correctAnswer: [1],    
    } , {
        question: "The four moons orbiting Jupiter are Io, Ganymede, Callisto, and Europa. Who discovered them?", 
        answers: ["Gallileo Galilei", "Johannes Kepler", "Nicolaus Copernicus"],
        correctAnswer: [1],  
    }];

    var game = {
     correct: 0,
     incorrect: 0,
     timer: 10,
     counter: function(){
     game.timer--;
     $('#seconds').html(game.timer);
     if (game.timer <=0 ){
     game.over();
   }
   },
     
   start: function(){
            counter = setInterval(game.counter,1000);
            $('#interiorContainer').prepend('<h2>Remaining Time: <span id="timer"></span> Seconds</h2>')
             $('#play').remove();
              for(var i=0; i<questions.length; i++){
               $('#interiorContainer').append('<h2>'+questions[i].question+'</h2>');
            for(var j=0; j<questions[i].answers.length;j++){ 
            $('#interiorContainer').append("<input type='radio' name='question- " + i + " ' value= ' ' " +questions[i].answers[j]+ " ' > " +questions[i].answers[j])
        }
      }
       $('#interiorContainer').append('<button id="#end">Done</button>');
     },

       over: function(){

        $.each($('input[name="question-0]":checked'),function(){
            if($(this).val()==questions[0].correctAnswer){
              game.correct++;
            } else {
              game.incorrect++;
            }
          });

         $.each($('input[name="question-1]":checked'),function(){
           if($(this).val()==questions[1].correctAnswer){
             game.correct++;
           } else {
             game.incorrect++;
           }
         });

          $.each($('input[name="question-2]":checked'),function(){
           if($(this).val()==questions[2].correctAnswer){
             game.correct++;
           } else {
             game.incorrect++;
           }
         });

       $.each($('input[name="question-3]":checked'),function(){
           if($(this).val()==questions[3].correctAnswer){
             game.correct++;
           } else {
             game.incorrect++;
           }
         });

         $.each($('input[name="question-4]":checked'),function(){
           if($(this).val()==questions[4].correctAnswer){
             game.correct++;
           } else {
             game.incorrect++;
           }
         });

        $.each($('input[name="question-5]":checked'),function(){
           if($(this).val()==questions[5].correctAnswer){
             game.correct++;
           } else {
             game.incorrect++;
           }
         });

        $.each($('input[name="question-6]":checked'),function(){
           if($(this).val()==questions[6].correctAnswer){
             game.correct++;
           } else {
             game.incorrect++;
           }
         });

    this.results();
       },
    results: function(){
      clearInterval(timer);
      $('#interiorContainer').remove();
      $('#interiorContainer').html("<h2>Congratulations!</h2>");
      $('#interiorContainer').append("<h3>You got "+this.correct+"right!</h3>")
      $('#interiorContainer').append("<h3>You got "+this.incorrect+"wrong.<h3>")
      $('#interiorContainer').append("<h3> And you didn't answer "+(questions.length-(this.incorrect+this.correct))+"<h3>")
    }
}

});





       var pos = 0;
       var correct = 0;
       var quiz, quiz_status, question, choice, choices, chA, chB, chC, chD;



       



           //////////////////
           
          //  const quizContainer = document.getElementById("quiz");
           

    
    //////////////////////////
    
    
//             const questions = [

//         { question: "What is the Capital of Washington?",
//             answers: {

//                 a: "Spokane",
//                 b: "Olympia",
//                 c: "Vancouver",
//                 d: "Seattle"


//             },
//             correctAnswer: "b"
//          },
//         {
//              question: "What is the Capital of Montana?",
//             answers: {

//                 a: "Helena",
//                 b: "Billings",
//                 c: "Bozeman",
//                 d: "Missoula"
//         },
//             correctAnswer: "a"
//         },
//         {
//              question: "What is the Capital of Kansas?",
//             answers: {

//                 a: "Kansas City",
//                 b: "Topeka",
//                 c: "Wichita",
//                 d: "Overland Park"
//  },
//             correctAnswer: "b"
//  },
//         {
//             question: "What is the Capital of Oregon?",
//             answers: {

//                 a: "Portland",
//                 b: "Salem",
//                 c: "Eugene",
//                 d: "Bend"
//  },
//             correctAnswer: "b"
//  },
//         {

//             question: "What is the Capital of Nebraska?",
//             answers: {

//                 a: "Omaha",
//                 b: "Nebraska City",
//                 c: "Grand Island",
//                 d: "Lincoln"
// },
//             correctAnswer: "d"
// },
// ];


const questions = [
    ["What is the Capital of Washington?", "Spokane", "Olympia", "Vancouver", "Seattle", "B"],
    ["What is the Capital of Montana", "Helena", "Billings", "Bozeman", "Missoula", "A"],
    ["What is the Capital of Kansas", "Kansas City", "Topeka", "Wichita","Overland Park", "B"],
    ["What is the Capital of Nebraska", "Omaha", "Nebraska City", "Grand Island","Lincoln", "D"]
    ];



    function get(x){

        return document.getElementById(x);

    }



    function makeQuestion(){
        quiz = get("quiz");
        if(pos >= questions.length){
          quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
          get("quiz_status").innerHTML = "You Finished!";
          
        pos = 0;
          correct = 0;
         
          return false;
        }
        get("quiz_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
        question = questions[pos][0];
        chA = questions[pos][1];
        chB = questions[pos][2];
        chC = questions[pos][3];
        chD = questions[pos][4];
        quiz.innerHTML = "<h3>"+question+"</h3>";
        
        quiz.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
        quiz.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
        quiz.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
        quiz.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
        quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
      
    
        // quiz.innerHTML += "<button  name='choices' value='A'onclick='checkAnswer()'>"+chA+"<br>";
        // quiz.innerHTML += "<button  name='choices' value='B'onclick='checkAnswer()'>"+chB+"<br>";
        // quiz.innerHTML += "<button  name='choices' value='C'onclick='checkAnswer()'>"+chC+"<br>";
        // quiz.innerHTML += "<button  name='choices' value='D'onclick='checkAnswer()'>"+chD+"<br>";
        
    
    
    
    
    }


      function checkAnswer(){
        
        choices = document.getElementsByName("choices");
        for(var i=0; i<choices.length; i++){
          if(choices[i].checked){
            choice = choices[i].value;
          }
        }
       
        if(choice == questions[pos][5]){
          
          correct++;
        }

        
        
        pos++;
        
        makeQuestion();
      }


      


      window.addEventListener("load", makeQuestion, false);

////////////////////

    //   const countDown = 10000;
    //   const y = setInterval (function() {



    //         const now = 0;
    //         const distance = countDown - now;

    //         const seconds = Math.floor((distance % (1000 * 60 )) / 1000);

    //         document.getElementById("timer").innerHTML= "timer "+seconds;




    //         if (distance < 0) {
    //             clearInterval(y);
    //             document.getElementById("timer").innerHTML = "EXPIRED";
    //           }
    //         }, 1000);


////////////////////

            function startTimer(duration, display) {
                var timer = duration, seconds;
                setInterval(function () {
                    
                    seconds = parseInt(timer % 60, 10);
                    seconds = seconds < 10 ? "0" + seconds : seconds;
            
                    display.textContent = seconds;
            
                    if (--timer < 0) {
                        timer = duration;
                    }
                }, 1000);
            }
            
            window.onload = function () {
                var sixtySeconds = 60 * 5,
                    display = document.querySelector('#timer');
                startTimer(sixtySeconds, display);
            };

            

  
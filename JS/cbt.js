// var countDownDate = new Date("June 12, 2024 17:40:25").getTime();

// var x = setInterval(function() {
//   var now = new Date().getTime();

//   var distance = countDownDate - now;

//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 
//   document.getElementById("demo").innerHTML = hours + "h "
//   + minutes + "m " + seconds + "s ";


//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);



      var questions = [
            {
                number: "1",
                question: "Question 1 of 10 <br>  <br> 1. The poem 'SHALL I COMPARE THEE TO A SUMMER's DAY?' by William Shakespeare in the year 1592 was addressed to which gender?",
                answers: ["Male", "Female", "Unknown"],
                correctAnswers: "Unknown"
            },
            {
                number: "2",
                question: "Question 2 of 10 br>  <br>  2. Which is correct to say: 'The yolk of the egg is white' or 'The yolk of the egg are white'? ",
                answers: ["First Statement", "Second Statement", "None"],
                correctAnswers: "None"
            },
            {
                number: "3",
                question: "Question 3 of 10  <br>  <br>   3. Before Mt.Everest was discovered, what was the highest mountain in the world",
                answers: ["Everest", "Sullivan", "Antartical Coast"],
                correctAnswers: "Everest"
            },
            {
                number: "4",
                question: "Question 4 of 10  <br>  <br>   4. How many squares are on a chessboard?",
                answers: ["64", "204", "48"],
                correctAnswers: "204"
            },
            {
                number: "5",
                question: "Question 5 of 10  <br>  <br>  5. what is the roman numeral for 500?",
                answers: ["CM", "M", "D"],
                correctAnswers: "D"
            },
            {
                number: "6",
                question: "Question 6 of 10  <br>  <br>  6. The term Blue Blood is used to describe what?",
                answers: ["Middke class society", "Verbal Complaint", "High class society"],
                correctAnswers: "High class society"
            },
            {
                number: "7",
                question: "Question 7 of 10  <br>  <br>  7. I left my campsite and hiked south for 3 miles, then I turned east and hiked for 3 miles. I then turned north and hiked for 3 miles at which time I came upon a bear inside my tent eating my food! \n What color was the bear",
                answers: ["Brown", "Black", "White"],
                correctAnswers: "White"
            },
            {
                number: "8",
                question: "Question 8 of 10  <br>  <br>   8. What are the next three letter in the following sequence? J, F, M, A, M, J, J, A, ?, ?, ?",
                answers: ["W,X<Y", "J,A,M", "S,O,N"],
                correctAnswers: "S,O,N"
            },
            {
                number: "9",
                question: "Question 9 of 10  <br>  <br>   9. In what language would you say 'ello-hay' to greet your friends?",
                answers: ["Bull latin", "Dog latin", "Pig latin"],
                correctAnswers: "Pig latin"
            },
            {
                number: "10",
                question: "Question 10 of 10  <br>  <br>   10. What part of the chicken is commonly called the 'drumstick'?",
                answers: ["Wing", "Leg", "feet"],
                correctAnswers: "Leg"
            }

        ];

// console.log(number)

        let a = 0;
        let score = 0;
        var opt_sel = [];

        display()

        function display() {
            document.getElementById("quiz").innerHTML +=  ` <p>${questions[a].question}</p>`
            for (let index = 0; index < (questions[a].answers).length; index++) {
                let element = (questions[a].answers)[index];
                document.getElementById("quiz").innerHTML += `
       
            <div>
            <input type="radio" id="${element}" title="${element}.id" name="select" onclick="logic(event)" >
            <label for="one"> ${element}
                <br>
                </div>
                `
                console.log(element);

                
                
            }
        }

        function amswer(element){
            opt_sel[index] = element;
            console.log(opt_sel);
        }          

        function next() {

        
            a++
            document.getElementById("quiz").innerHTML = " "
            display()
            
            if(a == 9){
              document.getElementById("id").style.display = "none";
              document.getElementById("id-s").style.display = "block";
            }
           
        }
     

        function prev() {
            if(a == 0){
                a = +10
            }
            a--
            document.getElementById("quiz").innerHTML = " "
            display()
            
        }

        function logic(params) {
             if(params.target.id !== questions[a].correctAnswers){
            return score
        }
            score++
            console.log(score)
            return

        
        }

        document.getElementById("id-s").addEventListener("click", function(){
         document.getElementById("mod").style.display = "block"
         document.getElementById("close").addEventListener("click", function(){
            document.getElementById("quiz").innerHTML = `
            <div>
                <h1>
                    You have completed your assessment!!!
                </h1>
                <p> Your score is: ${score}</p>
            </div>
           
             `
             document.getElementById("mod").style.display = "none"
             document.getElementById("id-p").style.display = "none";
             document.getElementById("id").style.display = "none";
             document.getElementById("id-s").style.display = "none";
             document.getElementById("demo").style.display = "none";
                return
         })
       
         document.getElementById("open").addEventListener("click",function(){
            document.getElementById("mod").style.display = "none"
         })




       
        })

        // function one(){
        //     document
        // }
      

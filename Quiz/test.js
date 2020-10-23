//The Questions and All stuff
var quetions = [{
        question: "Which of the following is a server-side Java Script object?",
        Option1: "function",
        Option2: "file",
        Option3: "date",
        Option4: "fileupload",
        answer: "b",
    },
    {
        question: "Which of the below is used in Java script to insert special characters? ",
        Option1: "&",
        Option2: "%",
        Option3: "-",
        Option4: "/",
        answer: "d"
    },
    {
        question: " Which of the following is correct to write “Hello World” on the web page?",
        Option1: " A. System.out.println(“Hello World”) ",
        Option2: " B. print(“Hello World”) ",
        Option3: " C. document.write(“Hello World”) ",
        Option4: " D. response.write(“Hello World”) ",
        answer: "c",
    },
    {
        question: " Which of the following is the tainted property of a window object in Java Script?",
        Option1: " A. Pathname ",
        Option2: " B. Protocol ",
        Option3: " C. Defaultstatus ",
        Option4: " D. Host ",
        answer: "c",
    },
    {
        question: " Which attribute needs to be changed to make elements invisible?",
        Option1: " A. visibilty ",
        Option2: " B. visible ",
        Option3: " C. invisibility ",
        Option4: " D. invisible ",
        answer: "a",
    }
];

var counter = 0; //For Count of Questions if Exceed 5 score will display
var score = 0; //Obiviously for score
//var remainedquestion = [];(This is actually for checking the remained question,but it didnt worked lol)
var main = shuffleArray(quetions);

function foo() {
    //onload func which draws questions
    getquestion();

}

function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

function getquestion() {
    if (counter < 5) {
        document.getElementById("que").innerHTML = counter + 1 + "." + main[counter].question;
        document.getElementById("a").innerHTML = main[counter].Option1;
        document.getElementById("b").innerHTML = main[counter].Option2;
        document.getElementById("c").innerHTML = main[counter].Option3;
        document.getElementById("d").innerHTML = main[counter].Option4;
    } else {
        //if counter exceed 5 it will display score and refresh the quiz
        //  var flag = checkremained();
        //   if (flag == true) {
        alert("Your score is: " + score);
        counter = 0;
        score = 0;
        // remainedquestion = [];
        drawscore();
        foo();
    }
}

//this is onclick function when user choose options it will automatically validate between selected option and the answer and updates the score
//the only thing is with this That i only want that getquestion() function have its control not to just wander it on its own
//also i cant call this function from foo() idk what i m trying to explain but if anyone have any good way to check or validate this function i m looking forward for it
function getanswer(id) {
    if (id === main[counter].answer) {
        updatescore(true); //idk what i m trying to do but it works, dont js have any rules or pattern
    } else {
        updatescore();
    }
}
//Obviously to update score
function updatescore(flag) {
    if (flag === true) {
        score += 1;
        counter += 1;
        drawscore(); //to update score on webpage
        getquestion(); //again call getquestion() damm!

    } else {
        counter += 1;
        getquestion();
    }
}

function drawscore() {
    document.getElementById("score").innerHTML = score;
}




//The main problem is with this that it only skip that question but not attempt it again 
// it simply skips it 
//If u have any best way to implement it plzz make changes
function nextquestion() {
    //   remainedquestion.push(counter);
    counter += 1;
    getquestion();

}

//function checkremained(){
//   getquestion()
//}



//Plzz just not change the webpage but if want can change the js
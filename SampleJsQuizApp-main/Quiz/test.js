//The Questions and All stuff
var Questions = [{
        question: "Which of the following is a server-side Java Script object?",
        Option1: "A. function",
        Option2: "B. file",
        Option3: "C. date",
        Option4: "D. fileupload",
        answer: "b",
        Index: 0,

    },
    {
        question: "Which of the below is used in Java script to insert special characters? ",
        Option1: "A. &",
        Option2: "B. %",
        Option3: "C. -",
        Option4: "D. /",
        answer: "d",
        Index: 1,
    },
    {
        question: " Which of the following is correct to write “Hello World” on the web page?",
        Option1: " A. System.out.println(“Hello World”) ",
        Option2: " B. print(“Hello World”) ",
        Option3: " C. document.write(“Hello World”) ",
        Option4: " D. response.write(“Hello World”) ",
        answer: "c",
        Index: 2,
    },
    {
        question: " Which of the following is the tainted property of a window object in Java Script?",
        Option1: " A. Pathname ",
        Option2: " B. Protocol ",
        Option3: " C. Defaultstatus ",
        Option4: " D. Host ",
        answer: "c",
        Index: 3,
    },
    {
        question: " Which attribute needs to be changed to make elements invisible?",
        Option1: " A. visibilty ",
        Option2: " B. visible ",
        Option3: " C. invisibility ",
        Option4: " D. invisible ",
        answer: "a",
        Index: 4,
    }
];
var Answer = "";
var Index = 0;
var score = 0;

function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

function getQuestion(Array) {
    if (Array.length > 0) {
        var currentQ = shuffleArray(Array)[0]
        document.getElementById("que").innerHTML = currentQ.question;
        document.getElementById("a").innerHTML = currentQ.Option1;
        document.getElementById("b").innerHTML = currentQ.Option2;
        document.getElementById("c").innerHTML = currentQ.Option3;
        document.getElementById("d").innerHTML = currentQ.Option4;
        Answer = currentQ.answer;
        Index = currentQ.Index;
    }
}

function getAnswer(ID) {
    if (ID == Answer) {
        document.getElementById('score').innerHTML = ++score;
    }
    for (var i = 0; i < Questions.length; i++) {
        if (Questions[i].Index == Index) {
            Questions.splice(i, 1);
        }
    }
    foo();
}

function nextQuestion() {
    foo();
}

function foo() {
    if (Questions.length == 0) {
        endQuiz();
    }
    getQuestion(Questions);
}

function endQuiz() { 
    var doc = document.getElementById("quiz");                          //Getting Id of Quiz Portion
    doc.innerHTML = null;                                               //Erasing All Quiz Portion
    var p = document.createElement("p");                                //Creating Para Obj
    var button = document.createElement("button");                      //Creating Button Obj    
    p.setAttribute("id", "endQuizText");                                //Adding Attribute to it    
    button.setAttribute("id", "refresh");                               //sAME      
    var paratext = document.createTextNode("Your Score Is: " + score);  //aDDING Text
    var buttontxt = document.createTextNode("Restart Quiz");            //Same    
    p.appendChild(paratext);                                            //Adding text to para obj    
    button.appendChild(buttontxt);                                      //Adding text to button obj  
    doc.appendChild(p);                                                 //Adding para obj to doc         
    doc.appendChild(button);                                            //Adding button obj to doc    
    button.onclick = function() {                                       //This Function For Refresh    
        location.reload();
    }
}

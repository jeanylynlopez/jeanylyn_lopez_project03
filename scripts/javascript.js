//===============
// AN EMPTY OBJECT, THE NAME SPACE 
//===============

const quiz = { };

//===============
// ALL THE INDIVIDUAL VARIABLES AND FUNCTIONS/METHODS
//===============

quiz.queenNames = {
    bebe: ["bebe zahara bene", "bebe zahara", "bebe"],
    tyra: ["tyra sanchez", "tyra"],
    raja: ["raja"],
    sharon: ["sharon needles", "sharon", "needles"],
    jinkx: ["jinkx monsoon", "jinkx"],
    bianca: ["bianca del rio", "bianca"],
    violet: ["violet cachki", "violet"],
    bob: ["bob the drag queen", "bob"],
    sasha: ["sasha velour", "sasha"],
    aquaria: ["aquaria"],
    chad: ["chad michaels", "chad"],
    alsaka: ["alaska"],
    trixie: ["trixie mattel", "trixie"]
}

//===============
// THIS IS THE NEW ARRAY OF ALL THE QUEENS AND THIER POSSIBLE NICKNAMES BEING INPUTTED AFTER A USER INPUTS A CORRECT ANSWER 
//===============

quiz.newInputedQueens = [];

//===============
// THIS IS STORING THE VALUE OF WHAT THE USER IS INPUTTING
//===============

quiz.queenInput = $("input").val();

///===============
//????????WHAT THE HELL IS THIS DOING?
//===============

quiz.userInput = "false"

//===============
//?????????ALSO WHAT THE HELL IS THIS DOING???
//??????CAN WE MAKE A BETTER NAME FOR THIS???
//===============
quiz.eachNewInputedQueens = "";

//===============
// IF THE INPUT IS IN THE NEW ARRAY (quiz.newInputedQueen) THEN SAY YOU ALREADY HAVE IT AND DON'T INPUT ANYTHING
//===============
quiz.duplicate = function(){
    for (let i = 0; i < quiz.newInputedQueens.length; i++) {
        if (quiz.queenInput === quiz.newInputedQueens[i]) {
            //???????bob would be equal to bob 
            //????can we make these names better so we know what's happenig?
            quiz.eachNewInputedQueens = quiz.newInputedQueens[i];
            $(".duplicate").html("<p>You already wrote that!</p>").show();
            $(".duplicate").delay(2000).fadeOut("slow");
            $("input").val("");
        }
    } 
}

//===============
//A FOR IN LOOP INTO THE OBJECT 
//???IS THERE A BETTER NAME???
//===============

quiz.loopIntoQueenNames = function(){
    for (let item in quiz.queenNames) {
        // quiz.loopIntoQueenNamesArray();
        for (let i = 0; i < quiz.queenNames[item].length; i++) {
            //MAKE SURE ONLY THE QUEENS CAN BE INPUTTED IN 
            // true that name appears here. set variable value to true 
            // else set variable to false 
            if (quiz.queenInput === quiz.eachNewInputedQueens) {
                console.log("Do nothing!");
                quiz.userInput = "true";

            } else if (quiz.queenInput === quiz.queenNames[item][i]) {
                quiz.userInput = "true";
                // queenInput = queenNames[item][0];
                $("ul").append("<li>" + quiz.queenNames[item][0] + "</li>");
                $("input").val("");
                quiz.newInputedQueens.push(quiz.queenNames[item][0], quiz.queenNames[item][1], quiz.queenNames[item][2]);
            }
        }
    }
}

//===============
//OTHER QUEENS WITH BEYONCE AND QUEEN ELIZABETH
//===============

quiz.otherQueens = function(){
    if (($("input").val() === "beyonce") || ($("input").val() === "queen elizabeth")) {
        quiz.userInput = true;
        let otherQueens = $("input").val()
        $(".anotherQueen").html(`${otherQueens} is obviously a queen, but not what we're looking for :)`).show();
        $("input").val("");
        $(".anotherQueen").delay(2000).fadeOut("slow");
    } 
}

//===============
// IF THE USER INPUT IS NOT A QUEEN
//===============

quiz.wrongInput = function(){
    if (quiz.userInput === "false") {
        //HTML IS MAKING SURE WE ONLY HAVE ONE DISPLAYED INSIDE OF IT AND WE'RE USING SHOW TO MAKE SURE IT SHOWS 
        $(".wrong").html("Wrong!").show();
        $("input").val("");
        $(".wrong").delay(2000).fadeOut("slow");
    } 
}

//===============
//SUBMIT CHOICE 
//===============

quiz.submitChoice = function(){

    $("form").on("submit", function(e){
        e.preventDefault();
        quiz.duplicate();
        quiz.loopIntoQueenNames();
        quiz.wrongInput();
        quiz.otherQueens();

    })
}


//===============
// INITIALIZATION OF THE QUIZ
//===============

quiz.init = function(){
    quiz.submitChoice();
    
}

//===============
//START OF THE DOCUMENT READY FUNCTION 
//===============

$(document).ready(function(){

//===============
//START OF THE SUBMIT FUNCTION 
//===============

    quiz.init();


}) // END OF THE DOCUMENT READY FUNCTION 
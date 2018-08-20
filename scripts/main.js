
// AN ARRAY OF ALL THE QUEEN'S NAMES 
let queenNames = {
    bebe: ["Bebe Zahara Benet", "bebe zahara benet", "bebe zahara", "bebe"],
    tyra: ["Tyra Sanchez", "tyra sanchez", "tyra"],
    raja: ["Raja", "raja"],
    sharon: ["Sharon Needles", "sharon needles", "sharon", "needles"],
    jinkx: ["Jinkx Monsoon", "jinkx monsoon", "jinkx"],
    bianca: ["Bianca Del Rio", "bianca del rio", "bianca"],
    violet: ["Violet Cachki", "violet cachki", "violet"],
    bob: ["Bob the Drag Queen", "bob the drag queen", "bob"],
    sasha: ["Sasha Velour", "sasha velour", "sasha"],
    aquaria: ["Aquaria", "aquaria"],
    chad: ["Chad Michaels", "chad michaels", "chad"],
    alsaka: ["Alaska", "alaska"],
    trixie: ["Trixie Mattel", "trixie mattel", "trixie"] 
} 

let newInputedQueens = [];

let userInputFirst = [];


$(document).ready(function () {
    
//START OF SUBMIT FUNCTION    
    $("form").on("submit", function(e){
        e.preventDefault();
        let queenInput = $("input").val().toLowerCase();
        let userInput = "false";  
        let eachNewInputedQueens = "";
        let countdown;

// IF THE INPUT IS IN THE NEW ARRAY THEN SAY YOU ALREADY HAVE IT AND DON'T INPUT ANYTHING  
        for (let i = 0; i < newInputedQueens.length; i++){
            if (queenInput === newInputedQueens[i]){
                eachNewInputedQueens = newInputedQueens[i];
                $(".sayings").html("<p>You already have her!</p>").show();
                $(".sayings").delay(800).fadeOut("slow");
                $("input").val("");
            } 
        } // END OF THE FIRST LOOP FOR THE NEW ARRAY newInputedQueens

//A FOR IN LOOP INTO THE OBJECT AND A LOOP INTO THE ARRAY
        for (let item in queenNames) {
            for (let i = 0; i < queenNames[item].length; i++){
//MAKE SURE ONLY THE QUEENS CAN BE INPUTTED IN 

                if (queenInput === eachNewInputedQueens){
                    userInput = "true";                    
                } else if (queenInput === queenNames[item][i]) {
                    userInput = "true";
                    $(".sayings").html("<p>Yass Queen!</p>").show();
                    $(".sayings").delay(2000).fadeOut("slow");
                    $(".remembered-queens").append(`<li><span class="hightlightWhite">${queenNames[item][0]} </span></li>`);
                    newInputedQueens.push(queenNames[item][0], queenNames[item][1], queenNames[item][2], queenNames[item][3]);
                    queenNames[item].splice(0,5);
                    $("input").val("");
                }
            }
        } //END OF THE NESTED LOOPS FOR THE ORIGINAL OBECT AND THE ARRAYS IN THE OBJECT

//OTHER QUEENS WITH BEYONCE AND QUEEN ELIZABETH     
        if (($("input").val().toLowerCase() === "beyonce") || ($("input").val().toLowerCase() === "queen elizabeth")) {
            userInput = true;
            let otherQueens = $("input").val();
            $(".sayings").html("<p>She's obviously a queen, but not what we're looking for.</p>").show();
            $(".sayings").delay(3000).fadeOut("slow");
            $("input").val("");
        } 

//THIS IS WHAT HAPPENS IF A USER INPUT IS FALSE
        if (userInput === "false"){
            $(".sayings").html("<p>Wrong!</p>").show();
            $(".sayings").delay(2000).fadeOut("slow");
            $("input").val("");
        } 
        
// PUSH INTO NEW ARRAY FOR THE FIRST INPUT 
        userInputFirst.push(queenInput);
// IF THE USER INPUT ARRAY IS EQUAL TO ONE THEN START THE TIMER  
        if (userInputFirst.length === 1){
// START THE TIMER 
// GRABBING CURRENT TIME STAMP IN MILLISECONDS
// DISPLAYS TIMER 
// STOPS TIMER IF ITS EQUAL TO 0 
            function timer(seconds) {
                const now = Date.now();
                const then = now + seconds * 1000;
                displayTimeLeft(seconds);
                $(".timer h2").html(`0:${seconds}`);
                countdown = setInterval(function(){
                    const secondsLeft = Math.round((then - Date.now()) / 1000);
                    displayTimeLeft(secondsLeft);
                    $(".timer h2").html(`0:${secondsLeft}`);
                    if (secondsLeft < 10){
                        $(".timer h2").empty();
                        $(".timer h2").html(`0:0${secondsLeft}`);
                    }
                   
                    if (newInputedQueens.length === 52) {
                        clearInterval(countdown);
                        $(".timer h2").empty();
                        $(".timer h2").append(`<span class="highlight">YOU NAMED ALL THE QUEENS!</span>`).show().fadeOut(400).fadeIn(300).fadeOut(400).fadeIn(300).fadeOut(400).fadeIn(300);
                    } else if (secondsLeft < 0){
                        clearInterval(countdown);
                        $(".timer h2").empty();
                        $(".timer h2").html(`GAME OVER`)
                        $(".gameover").html(`<span class="highlightWhite">The queens you missed are highlighted in red.</span>`);
                        $("input").attr("disabled", true);

                        for (let item in queenNames){
                            if (queenNames[item][0] !== undefined)
                                $(".remembered-queens").append(`<li><span class="hightlightRed">${queenNames[item][0]} </span></li>`)
                        }
                    }

                }, 1000);
            }
    
            function displayTimeLeft(seconds){
            }
        
            timer(60);
        } 

    }); // END OF SUBMIT FUNCTION 

}); // END OF THE DOCUMENT READY FUNCTION

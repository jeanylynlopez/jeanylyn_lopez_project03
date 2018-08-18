
// AN ARRAY OF ALL THE QUEEN'S NAMES 
let queenNames = {
    bebe: ["Bebe Zahara Bene", "bebe zahara bene", "bebe zahara", "bebe"],
    tyra: ["Tyra Sanchez", "tyra sanchez", "tyra"],
    raja: ["Raja", "raja"],
    sharon: ["Sharon Needles", "sharon needles", "sharon", "needles"],
    jinkx: ["Jinkx Monsoon", "jinkx monsoon", "jinkx"],
    bianca: ["Biance Del Rio", "bianca del rio", "bianca"],
    violet: ["Violet Cachki", "violet cachki", "violet"],
    bob: ["Bob the Drag Queen", "bob the drag queen", "bob"],
    sasha: ["Sasha Velour", "sasha velour", "sasha"],
    aquaria: ["Aquaria", "aquaria"],
    chad: ["Chad Michaels", "chad michaels", "chad"],
    alsaka: ["Alaska", "alaska"],
    trixie: ["Trixie Mattel", "trixie mattel", "trixie"] 
} 

//inputQueens.push(queen);
let newInputedQueens = [];

//just needs the first queen input 
let userInputFirst = [];

//===============
//ARRAYS WHEN IT'S DONE 
//===============

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
//???????bob would be equal to bob 
//????can we make these names better so we know what's happening?
                eachNewInputedQueens = newInputedQueens[i];
                // $(".sayings").html("<p>You already wrote that!</p>").show();
                // $(".sayings").delay(2000).fadeOut("slow");
                $(".duplicate").html("<p>You already have her!</p>").show();
                $(".duplicate").delay(800).fadeOut("slow");
                $("input").val("");
            } 
        } // END OF THE FIRST LOOP FOR THE NEW ARRAY newInputedQueens

//A FOR IN LOOP INTO THE OBJECT AND A LOOP INTO THE ARRAY
        for (let item in queenNames) {
            
            //create a variable that holds what the user puts in 
            for (let i = 0; i < queenNames[item].length; i++){
//MAKE SURE ONLY THE QUEENS CAN BE INPUTTED IN 
// true that name appears here. set variable value to true 
// else set variable to false 

                if (queenInput === eachNewInputedQueens){
                    // console.log("Do nothing!");
                    userInput = "true";
                    
                } else if (queenInput === queenNames[item][i]) {
                    userInput = "true";
                    // queenInput = queenNames[item][0];
                    // randomInput = $("input").val();
                    $(".sayings").html("<p>Yass Queen!</p>").show();
                    $(".sayings").delay(2000).fadeOut("slow");
                    // $(".right").html("Yass Queen!").show();
                    // $(".right").delay(500).fadeOut("slow");
                    $(".remembered-queens").append("<li>" + queenNames[item][0] + "</li>");
                    //push the string the user typed in 
                    //console log both queenNames and newInputedQueens 
                    //const queenNames is const change to let 
                    // newInputedQueens.push(queenInput);
                    newInputedQueens.push(queenNames[item][0], queenNames[item][1], queenNames[item][2], queenNames[item][3]);
                    // queenNames[item].pop();
                    queenNames[item].splice(0,5);
                    // console.log(queenNames);
                    // console.log(newInputedQueens);
                    
                    $("input").val("");
                }
            }
        } //END OF THE NESTED LOOPS FOR THE ORIGINAL OBECT AND THE ARRAYS IN THE OBJECT

//OTHER QUEENS WITH BEYONCE AND QUEEN ELIZABETH
// is there a better way to make it disappear? Also, we want this to interchange between certain sayings. should that be a flickity?      
        if (($("input").val() === "beyonce") || ($("input").val() === "queen elizabeth")) {
            userInput = true;
            let otherQueens = $("input").val()
            $(".sayings").html("<p>She's is obviously a queen, but not what we're looking for :)</p>").show();
            $(".sayings").delay(2000).fadeOut("slow");
            // $(".otherQueen").html(`She's is obviously a queen, but not what we're looking for :)`).show();
            // $(".otherQueen").delay(2000).fadeOut("slow");
            $("input").val("");
        } 

//THIS IS WHAT HAPPENS IF A USER INPUT IS FALSE
        if (userInput === "false"){
            //HTML IS MAKING SURE WE ONLY HAVE ONE DISPLAYED INSIDE OF IT AND WE'RE USING SHOW TO MAKE SURE IT SHOWS 

            $(".sayings").html("<p>Wrong!</p>").show();
            $(".sayings").delay(2000).fadeOut("slow");
            // $(".wrong").html("Wrong!").show();
            // $(".wrong").delay(500).fadeOut("slow");
            $("input").val("");
        } 
        
// PUSH INTO NEW ARRAY FOR THE FIRST INPUT 
        userInputFirst.push(queenInput);
// IF THE USER INPUT ARRAY IS EQUAL TO ONE THEN START THE TIMER  
        if (userInputFirst.length === 1){
// START THE TIMER 
            function timer(seconds) {
                //this is grabbing the current time stamp in milliseconds  
                const now = Date.now();
                // this will be Date.now() + seconds that we passed in multiplied by 1000
                const then = now + seconds * 1000;
                displayTimeLeft(seconds);
                $(".timer h2").html(`0:${seconds}`);
                countdown = setInterval(function(){
                    const secondsLeft = Math.round((then - Date.now()) / 1000);
                    //display it
                    displayTimeLeft(secondsLeft);
                    $(".timer h2").html(`0:${secondsLeft}`);
                    if (secondsLeft < 10){
                        $(".timer h2").empty();
                        $(".timer h2").html(`0:0${secondsLeft}`);
                    }

                    // in here can we stop the timer if it goes to equal to less than 0  
                    if (newInputedQueens.length === 52) {
                        clearInterval(countdown);
                        // console.log(newInputedQueens.length);
                        $(".timer h2").empty();
                        $(".timer h2").append(`<span class="highlight">OMG! YOU NAMED ALL THE QUEENS!</span>`).show();
                        // $("remembered-queens").delay(1000).empty();

                    } else if (secondsLeft < 0){
                        clearInterval(countdown);
                        $(".timer h2").empty();
                        $(".timer h2").html(`GAME OVER`)
                        $(".gameover").html(`The queens you missed are highlighted in red.`);
                        $("input").attr("disabled", true);

                        for (let item in queenNames){
                            if (queenNames[item][0] !== undefined)
                                $(".remembered-queens").append(`<li><span class="hightlight">${queenNames[item][0]} </span></li>`)
                        }
                    }

                }, 1000);
            }
    
            function displayTimeLeft(seconds){
            }
        
            timer(40);
        } 
        
        // IF THE USER GETS ALL THE GIRLS THERE'S A CELEBRATION 
        // CLEAR TIMER 
        // CAN WE GET LIKE ANIMATIONS OF BALLOONS OR DISCO BALLS 
        // DISABLE INPUT
        // if (userInputFirst.length === 13){
        //     clearInterval(countdown);
        //     $(".timer h2").empty();
        //     $(".timer h2").html(`OMG! YOU NAMED ALL THE QUEENS!`);

        // }
        
        

    }); // END OF SUBMIT FUNCTION 


}); // END OF THE DOCUMENT READY FUNCTION

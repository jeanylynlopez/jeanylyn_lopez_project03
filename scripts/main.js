// An array of all RuPaul drag race winners
    // Each winner would be an object that will include their nicknames.So you Can type in either their name or nicknames
    //You shouldn’t be able to type in their name or nickname more than once
// Should be able to type in an input
    // Hit enter when you put things in
    // Has a counter to say how many more queens you have left to name
    // You’ll start with an empty ul and add li’s once you input a name
    // Displays Yes or No when you press enter
// You’ll need a one minute timer
    // Display a time counter that counts down time
    // You shouldn’t be able to type anything once the timer stops
//Display the drag race winners when the timer runs out
    // Display the queens that you forgot or all the queens
    // Display how many queen out of 13 you got 

// add what is typed as li in the ul .queen-list

//**make sure the input isn't case sensitive 

//-------

// AN ARRAY OF ALL THE QUEEN'S NAMES 
const queenNames = {
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

//inputQueens.push(queen);
let newInputedQueens = [];
// let queenInput = $("input").val();
// let userInput = "";
let userInputFirst = [];

$(document).ready(function () {
    
//START OF SUBMIT FUNCTION    
    $("form").on("submit", function(e){
        e.preventDefault();
        let queenInput = $("input").val();
        let userInput = "false";  
        let eachNewInputedQueens = "";
        let countdown;
        // let userInputFirst = [];

// IF THE INPUT IS IN THE NEW ARRAY THEN SAY YOU ALREADY HAVE IT AND DON'T INPUT ANYTHING  
        for (let i = 0; i < newInputedQueens.length; i++){
            if (queenInput === newInputedQueens[i]){
//???????bob would be equal to bob 
//????can we make these names better so we know what's happening?
                eachNewInputedQueens = newInputedQueens[i];
                $(".duplicate").html("<p>You already wrote that!</p>").show();
                $(".duplicate").delay(2000).fadeOut("slow");
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
                    console.log("Do nothing!");
                    userInput = "true";
                    
                } else if (queenInput === queenNames[item][i]) {
                    userInput = "true";
                    // queenInput = queenNames[item][0];
                    // randomInput = $("input").val();
                    $("ul").append("<li>" + queenNames[item][0] + "</li>");
                    $("input").val("");
                    newInputedQueens.push(queenNames[item][0], queenNames[item][1], queenNames[item][2]);
                }
            }
        } //END OF THE NESTED LOOPS FOR THE ORIGINAL OBECT AND THE ARRAYS IN THE OBJECT

//OTHER QUEENS WITH BEYONCE AND QUEEN ELIZABETH
// is there a better way to make it disappear? Also, we want this to interchange between certain sayings. should that be a flickity?      
        if (($("input").val() === "beyonce") || ($("input").val() === "queen elizabeth")) {
            userInput = true;
            let otherQueens = $("input").val()
            $(".anotherQueen").html(`${otherQueens} is obviously a queen, but not what we're looking for :)`).show();
            $("input").val("");
            $(".anotherQueen").delay(2000).fadeOut("slow");
        } 

//THIS IS WHAT HAPPENS IF A USER INPUT IS FALSE
        if (userInput === "false"){
            //HTML IS MAKING SURE WE ONLY HAVE ONE DISPLAYED INSIDE OF IT AND WE'RE USING SHOW TO MAKE SURE IT SHOWS 
            $(".wrong").html("Wrong!").show();
            $("input").val("");
            $(".wrong").delay(2000).fadeOut("slow");
        } 
        
//PUSH INTO NEW ARRAY FOR THE FIRST INPUT 
        userInputFirst.push(queenInput);
        // console.log(userInputFirst);
        
        // userInputFirst.unshift("start");
        // console.log(userInputFirst);
        // if (blah !== userInputFirst[0])
        if (userInputFirst.length === 1){
            // START THE TIMER
            // how do i start the timer only when i submit an answer 
            console.log(queenInput);
            console.log(userInputFirst[0]);
            console.log(userInputFirst);
            console.log(userInputFirst.length);
            
            function timer(seconds) {
                //this is grabbing the current time stamp in milliseconds  
                const now = Date.now();
                // this will be Date.now() + seconds that we passed in multiplied by 1000
                const then = now + seconds * 1000;
                displayTimeLeft(seconds);
                $(".timer").html(seconds);
                countdown = setInterval(function(){
                    const secondsLeft = Math.round((then - Date.now()) / 1000);
                    // in here can we stop the code from happening 
                    if (secondsLeft <= 0){
                        clearInterval(countdown);
                        $(".timer").empty();
                        $(".timer").append("<p> TIME'S UP!</p>")
                        // alert("Game over!");
                    }
                    //display it
                    displayTimeLeft(secondsLeft);
                    $(".timer").html(secondsLeft);

                }, 1000);
            }
    
            function displayTimeLeft(seconds){
                // console.log(seconds);
            }
        
            timer(5);
        } //END OF NEW ARRAY FOR FIRST INPUT 
        
        

    }); // END OF SUBMIT FUNCTION 


}); // END OF THE DOCUMENT READY FUNCTION

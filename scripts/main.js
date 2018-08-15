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

// an array of all the queens names and their other possible names 
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

$(document).ready(function () {
    
//START OF SUBMIT FUNCTION    
    $("form").on("submit", function(e){
        e.preventDefault();
        let queenInput = $("input").val();
        let userInput = "false";  

// IF THE INPUT IS IN THE ARRAY THEN SAY YOU ALREADY HAVE IT AND DON'T INPUT ANYTHING  
        for (let i = 0; i < newInputedQueens.length; i++){
            // console.log(newInputedQueens);
            // console.log(newInputedQueens[i]);
            if (queenInput === newInputedQueens[i]){
                console.log("yo");
// ***???there must be a better way to replace or not put anything into what's supposed to be in it
                // $("ul").remove("<li> </li>");
                // $("ul").remove();
                // $("ul").detach();
                // $("ul").append(`<li class="duplicate">" + ${queenNames[item][0]} + "</li>`);
                // $("ul").not("")
                
                // ("<li>" + queenNames[item][0] + "</li>")
                // $("ul").noop()
                // $.noop();
                $(".sayings").append("<p>You already wrote that!</p>");
                $(".sayings").delay(2000).fadeOut("slow");
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
                if (queenInput === queenNames[item][i]) {
                    userInput = "true";
                    // queenInput = queenNames[item][0];
                    $("ul").append("<li>" + queenNames[item][0] + "</li>");
                    $("input").val("");
                    newInputedQueens.push(queenNames[item][0], queenNames[item][1], queenNames[item][2]);
                    // console.log(newInputedQueens);
                } 
            }
        } //END OF THE NESTED LOOPS FOR THE ORIGINAL OBECT AND THE ARRAYS IN THE OBJECT

// NEEDS TO PUSH EVERY SINGLE NAME INTO THE NEW ARRAY newInputedQueens
        // if (queenInput === )


//OTHER QUEENS WITH BEYONCE AND QUEEN ELIZABETH
        if (($("input").val() === "beyonce") || ($("input").val() === "queen elizabeth")) {
            userInput = true;
            let otherQueens = $("input").val()
            $(".sayings").append(`<p> ${otherQueens} is obviously a queen, but not what we're looking for :)</p>`)
            $("input").val("");
// is there a better way to make it disappear? Also, we want this ti interchange between certain sayings. should that be a flickity?      
            $(".sayings").delay(2000).fadeOut("slow");
        } 

//THIS IS WHAT HAPPENS IF A USER INPUT IS FALSE
        if (userInput === "false"){
            $(".sayings").append("<p>Wrong!</[>");
            $("input").val("");
            $(".sayings").delay(2000).fadeOut("slow");
        }

// //IF THE INPUT IS IN THE ARRAY THEN SAY YOU ALREADY HAVE IT AND DON'T INPUT ANYTHING         
    
        // newInputedQueens.forEach(function(queeninNewArray){
        //     if (queenInput === queeninNewArray){
        //         console.log('yo');
        //         $(".sayings").append("<p>You already added her!</p>");
        //         $("input").val("");
        //         $(".sayings").delay(2000).fadeOut("slow");
        //     }
        // });    

        // for (let i = 0; i < newInputedQueens.length; i++){
        //     // console.log(newInputedQueens);
        //     console.log(newInputedQueens[i]);

        //     if (queenInput === newInputedQueens[i]){
        //         console.log("yo");
        //         // console.log(newInputedQueens);
        //         // console.log(newInputedQueens[i]);


        //     }
        // }
        
    }); // END OF SUBMIT FUNCTION 

}); // END OF THE DOCUMENT READY FUNCTION
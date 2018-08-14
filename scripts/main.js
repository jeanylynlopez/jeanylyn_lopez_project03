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

let inputQueens = [];

$(document).ready(function () {
    
    $("form").on("submit", function(e){
        e.preventDefault();
        
        //loop into the array and names. and if the input matches a name in the array. then you can add it to the list 

        //loop into the object with a for in loop
        // For loops good for arrays. For in loops good for objects 
        for (let item in queenNames) {
        //loop into each array    
            for (let i = 0; i < queenNames[item].length; i++){
        //makes sure only the queens can be inputed queenNames[item][i]
                if ($("input").val() === queenNames[item][i]) {
                    let queen = $("input").val();
                    inputQueens.push(queen);
                    $("ul").append("<li>" + queen + "</li>");
                    $("input").val("");
                    console.log(inputQueens);
                    
        //append "Nope! Try again :)" once and then let it come off after a minute and turn it into another saying            
                } else if ($("input").val() !== queenNames[item][i]){
                    // $("input").val("Try again!");
                    // $("input").val("");
                    // $("h2").append("Nope! Try again :)")
                }
            }
        }
     
    //if the name is already in the array. don't put it in again 
    //loop over the new array  
        
            for (i = 0; i < inputQueens.length; i++){
                //logs the number of the array
                // console.log(i);
                // console.log(inputQueens[i]);
                if ($("input").val() === inputQueens[i]){
                    console.log(inputQueens[i]);
                    
                    // let statement = "You already added that"
                    // $("ul").append("<li>" + statement + "</li>");
                    // $("input").val("");
                    // $("input").val("You put that already");
                }
                
                
                // if ($("input").val() === inputQueens[i]){
                //     $("input").val("You put that already");
                // }
            }
        
        
        
        
        
        
    });


});
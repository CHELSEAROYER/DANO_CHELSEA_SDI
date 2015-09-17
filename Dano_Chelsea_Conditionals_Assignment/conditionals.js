/**
 * Created by ChelseaRoyer on 9/16/15.
 */
//Chelsea Dano. 16 September 2015.

//alert("Hello!"); Test to see if my files were associated correctly.

/* Writing a block of code that's containing a logical operator, whilst including a steak dinner
using &&- also steak needs to weigh a certain amount, & needs to be cut in 4 pieces. Both boolean values need to be
 correct for the initial console.log to be true.
 */
var steakWeight =20;
//Obviously I'm setting this up for it to be false because eating a 30 oz steak is ridiculous.
var idealWeight=30;
var niceCut=4;
//I was thinking I had to have this thing cut in 4 pices or it's just not going to work.
var cutUp=12;
//How many pieces that it's cut into. Not okay. Not the same as 4 ether.

if(idealWeight>steakWeight && niceCut===cutUp){
    console.log("Eat the steak.");
}else{
    console.log("Yeah send that thing back.");
}

/* Ternary time, it's time to put three components together. I need to order something that's
under $10.
 */
var foodBudget=10;
(foodBudget>8)? console.log("Order it, because it's affordable!"):console.log("Sorry You don't have enough...");

/* My  else if statement.
This is depicting our maximum limit for calories, minimum, & dessert allowances.
 */

var maxCal=800; //we don't want the total amount of calories to go over this.
var minCal=500; //we don't want to eat too little ether!
var dessertCal=150; //this is how many calories is in a bananna split.

if(maxCal>minCal){
    console.log("You can order this meal!");

}else if (maxCal>minCal+dessertCal){
    console.log("You can order the bananna split!");
}else{
    console.log("No dessert for you!");
}


/**
 * Created by ChelseaRoyer on 9/8/15.
 */
/* Chelsea Dano
SDI Section -week two expressions assignment
Dano_Chelsea_Assignment_Expressions!
8 September 2015
 */
/* If you had to get takeout for lunch (on work days) every single day of the year,
how much would it cost you?
 */

var epithet= prompt ("What's your name?");//ask the user what their name is
alert (" Howdy "+ epithet +"! Let's assume that you eat takeout for lunch every day you work.");
//send an alert to give the user an idea about what the info required will pertain to.
var foodMoney = prompt ("How much does your lunch typically cost?");
//asking for a dollar amount from the user, the purpose is to come up with a tab for the year.
console.log(foodMoney);
//Print out the value that the user contributes onto the console with console.log.

var workDays = prompt("How many days per week do You work?");
//This is assuming that the user does not work 7 days a week, hopefully not so....using a prompt again.
console.log(workDays);
//Print the good stuff out onto the console.

//and now for a variable to multiply foodMoney workDays and how many weeks are in a year (52.177).
var totalCost = foodMoney * workDays * 52.177;
console.log(epithet +" you spend "+ totalCost +"on lunch hour in a years time!");

//And now for a variable that will show how much money will go towards food in just one week using division.
var weeklyCost = totalCost/52.177;
console.log(" You also spend "+ weeklyCost +" on lunch food in a week! ");
//top this off with an alert, show the user something interesting.

alert(epithet +" you could have avoided spending "+ totalCost +" this year by packing a lunch every day! ");
//I'm all about saving those dollar bills.


/* 


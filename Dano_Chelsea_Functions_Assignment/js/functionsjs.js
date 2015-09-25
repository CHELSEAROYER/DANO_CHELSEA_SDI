/**
 * Created by ChelseaRoyer on 9/24/15.
 */
/*
Chelsea Dano.
September 24th, 2015.
The Functions Assignment!..week four.
 */

//alert("the file is associated!");......Yay we now are associated!!

//create some code that's prompting the user for a max#, and a minimum#-
//The end result of this function is to get three random numbers for a locker combo!

var smallLocker=prompt("We need to create three random numbers for a locker combination. \n What is the minimum number you want to use? ");
//we need to validate/make sure it's not blank or not a number??

while(smallLocker===" "); || isNaN(smallLocker)){
    //reprompt.
    smallLocker=prompt("Hey! PLease make sure that's not empty, and only use numbers please! Try again.");
}else if(isNaN(smallLocker)){
    smallLocker=prompt("Try again! We need a number...");
}
    //then prompt the user for a max number!

var bigLocker=prompt("Now enter the largest number you want to use. \n We will get a random number in between the two.");
//Validate.
while(bigLocker===" "); || isNaN(bigLocker)){
    //re-prompt
    bigLocker=prompt("Please do not leave the field black, you will need a number this time too. Try again!");

} else if(isNaN(bigLocker)){
    bigLocker=prompt("Try again with a number only this time!");
}
//Call that function, but not on the telephone!
var lockerCombo(smallLocker,bigLocker);
//call it.
function lockerCombo(small,big){
    var lockerCombo=math.round(math.random()*(big-small)+Number(small));
    return lockerCombo;//returning the value

}


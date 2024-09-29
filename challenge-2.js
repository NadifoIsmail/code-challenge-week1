//Speed detector

// added the prompt-sync module to get input from the user
const prompt = require("prompt-sync")();

//function to check the speed of a car and determine their demerit points or license suspension
function checkSpeed(speed){
const speedLimit = 70;
const kmPerPoint= 5;
//if the speed is less than the speedLimit it prints Ok
if(speed < 70){
    console.log("Ok");
}
else {
    const overspeed = speed - speedLimit; //calculate how much the driver has exceeded the speedLimit
    const points = overspeed/kmPerPoint;  //calculate the demerit points

    if(points > 12){
        console.log("License suspended");
    }
    else{
        console.log(`points:${points}`);
    }
}
}
//Allow the user to enter the speed of the car
let speed = prompt("Enter the speed :");

//Ensure the speed is a number
speed = parseInt(speed);

//Call the function to check the speed of the car and determine the demerit points or if the license is suspended
checkSpeed(speed);
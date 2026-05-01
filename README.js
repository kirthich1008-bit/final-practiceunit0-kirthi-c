

 /*
        PSEUDOCODE:
        1. Store baby information
        2. Check if the baby is standing
        3. Display a welcome message
        4. Store daily step counts in an array
        5. Show today's steps
        6. Loop through all recorded steps
        7. Calculate remaining steps to reach the goal
        */




        // VALUES, DATA TYPES, AND OPERATIONS
        // Using String, int, and boolean data types to store baby information


 let babyName = "Mikku";       
 let todaySteps = 14;
 let goalSteps = 20;
     isStanding = true;




         // STRINGING CHARACTERS TOGETHER
        // Combining strings and variables to create messages


let welcomeMessage = "Welcome to the Baby Step Tracker for " + babyName + "!";     
let statusMessage = (babyName  + " goal steps for today are  "  + goalSteps + ".");
let statusMessage1= (babyName + " has taken  " + todaySteps + " baby steps today.");
console.log(welcomeMessage);
console.log(statusMessage);
console.log(statusMessage1);
console.log("Is Mikku standing?", isStanding);


        // CONTROL STRUCTURES AND LOGIC
        // Using an if-else statement to check standing status

if (isStanding) {
            console.log(babyName + " is standing today!");
        } else {
            console.log(babyName + " is still crawling.");
        }


         // BUILDING ARRAYS
        // Creating an array to store weekly step counts



let weeklySteps = [14, 20, 25, 32, 40, 50, 70];



         // WORKING WITH LOOPS
        // Using a loop to display all weekly step counts



for (let i = 0; i < weeklySteps.length; i++) {
            console.log("Day " + (i + 1) + ": " + weeklySteps[i] + " steps");
        }
        console.log("Weekly Step Progress:");

        console.log("Today's saved step count: " + weeklySteps[0]);

         // VALUES, DATA TYPES, AND OPERATIONS
        // Performing subtraction to calculate remaining goal steps

let remainingSteps = goalSteps - todaySteps;
console.log("Remaining steps to reach goal: " + remainingSteps);
console.log("Baby Step Tracker is running successfully!");
    

         // array iteration method  concat split 
                 // checking twoweeks progress

let week1 = [14, 20, 30, 45, 50];
let week2 = [60, 75, 85, 95, 100];
        console.log(week1);
        console.log(week2);


let allWeeks = "twoWeeksProgress";
        allWeeks.split
         console.log(allWeeks);

let twoWeeksProgress = week1.concat(week2);
        console.log(twoWeeksProgress);


       







        
 


        
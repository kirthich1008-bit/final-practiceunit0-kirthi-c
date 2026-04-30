
 let babyName = "Mikku";       
 let todaySteps = 14;
 let goalSteps = 20;
     isStanding = true;
let welcomeMessage = "Welcome to the Baby Step Tracker for " + babyName + "!";     
let statusMessage = (babyName  + " goal steps for today are  "  + goalSteps + ".");
let statusMessage1= (babyName + " has taken  " + todaySteps + " baby steps today.");
console.log(welcomeMessage);
console.log(statusMessage);
console.log(statusMessage1);
console.log("Is the baby standing?", isStanding);

if (isStanding) {
            console.log(babyName + " is standing today!");
        } else {
            console.log(babyName + " is still crawling.");
        }

let weeklySteps = [14, 20, 25, 32, 40, 50, 70];
for (let i = 0; i < weeklySteps.length; i++) {
            console.log("Day " + (i + 1) + ": " + weeklySteps[i] + " steps");
        }
        console.log("Weekly Step Progress:");

        console.log("Today's saved step count: " + weeklySteps[0]);

let remainingSteps = goalSteps - todaySteps;
console.log("Remaining steps to reach goal: " + remainingSteps);
console.log("Baby Step Tracker is running successfully!");
    



        
 


        
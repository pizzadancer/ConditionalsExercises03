const input = require('readline-sync');
let engineIndicatorLight = 'green blinking';
let fuelLevel = 18000;
let engineTemperature = 2500;
let commandOverride;
let launchStatus;


/* 5) Implement the following checks using if/else if/else statements:

a) If fuelLevel is above 20000 AND engineTemperature is at or below 2500, print "Full tank. Engines good."

b) If fuelLevel is above 10000 AND engineTemperature is at or below 2500, print "Fuel level above 50%.  Engines good."

c) If fuelLevel is above 5000 AND engineTemperature is at or below 2500, print "Fuel level above 25%. Engines good."

d) If fuelLevel is at or below 5000 OR engineTemperature is above 2500, print "Check fuel level. Engines running hot."

e) If fuelLevel is below 1000 OR engineTemperature is above 3500 OR engineIndicatorLight is red blinking print "ENGINE FAILURE IMMINENT!"

f) Otherwise, print "Fuel and engine status pending..." */

// Code 5a - 5f hered

function getLaunchSysMessage(fuelLevel, engineTemperature, engineIndicatorLight) {
  if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
    return "ENGINE FAILURE IMMINENT!";
  } else if (fuelLevel > 20000 && engineTemperature <= 2500) {
    return "Full tank. Engines good.";
  } else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    return "Fuel level above 50%. Engines good.";
  } else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    return "Fuel level above 25%. Engines good.";
  } else if (fuelLevel <= 5000 && fuelLevel >= 1000 || engineTemperature > 2500) {
    return "Check fuel level. Engines running hot.";
  } else {
    return "Fuel and engine status pending...";
  }
}


function getLaunchStatus(overrideActivated) {
  if (overrideActivated) {
    return "launch!!!";
  } else {
    launchSysMessage = getLaunchSysMessage(fuelLevel, engineTemperature, engineIndicatorLight);
    if launchSysMessage === "Check fuel level. Engines running hot." {
      return "launch!!!";

    }
  }
} 

// 6) a) Create the variable commandOverride, and set it to be true or false. If commandOverride is false, then the shuttle should only launch if the fuel and engine check are OK. If commandOverride is true, then the shuttle will launch regardless of the fuel and engine status.

// main
console.log("Launch Check Program Activated!!!");
let cmdOverrideChoice = input.question("Do you want to activate command overide? ").toLowerCase();
// console.log(cmdOverrideChoice)

if (cmdOverrideChoice === "yes") {
  // console.log("yes");
  launchStatus = getLaunchStatus(true);
} else {
  // console.log("no");
  launchStatus = getLaunchStatus(false);
}
// launchStatus = launchCheck(fuelLevel, engineTemperature, engineIndicatorLight);

console.log(launchStatus);
// next, We need to figure out how to encapsulate this into an if statement for overrides











// if commandOverride === false {
//  // only launch if fuel and engine are ok
// }elsif true
//   // launch whenever


/* 6) b) Code the following if/else check:
If fuelLevel is above 20000 AND engineIndicatorLight is NOT red blinking OR commandOverride is true print "Cleared to launch!" Else print "Launch scrubbed!" */


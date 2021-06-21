const input = require('readline-sync');
let engineIndicatorLight = 'red blinking';
let fuelLevel = 20001;
let engineTemperature = 3444;
let commandOverride;



// Checks if indicator checks are ready for launch, returns the system message to communicate to the launch program
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

// Checks if shuttle is cleared for launch, if all indicators checks are good or if override is activated, shuttle is good for launch
function getLaunchStatus(commandOverride) {
  let launchSysMessage;
  launchSysMessage = getLaunchSysMessage(fuelLevel, engineTemperature, engineIndicatorLight);

  if ((fuelLevel > 20000 && engineIndicatorLight !== "red blinking") || commandOverride) {
    return [launchSysMessage, "Cleared to launch!"];
  } else {
    return [launchSysMessage, "Launch scrubbed"];
  }
} 

// Asks user if they want to activate commandOverride, if yes, return true; if no, return false
function getCommandOverride() {
  let user_choice = input.question("Do you want to activate the launch command override key? y / n ? ").toLowerCase();

  if (user_choice === "yes" || user_choice === "y") {
    console.log("Override Activated!");
    return true;
  } else {
    return false;
  }
}

// Program Start //
console.log("Starting Boot Process...");
console.log("Welcome to the Launch Initiation Status Program (LISP)");
commandOverride = getCommandOverride();
console.log();

let [sysMessage, launchStatus] = getLaunchStatus(commandOverride);

console.log(sysMessage);
console.log(launchStatus);


/*

//// PROGRAM BUILD BLUEPRINT \\\\

command console boot
cmd con welcome msg
insert override key? y/n
init launch(key = y/n)
	only launch if engine === OK || OVERRIDE
	also need to print message either way

*/





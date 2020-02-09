// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.
//
// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT
function addNew(name) {
  roster.push(name);
}

// REMOVE STUDENT
function remove(name) {
  roster.splice(roster.indexOf(name), 1);
}

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function display() {
  roster.forEach(element => console.log(element));
}

// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
if(prompt("Would you like start the roster web app? y/n") == "y"){
  var loopAskFlag = true;
  while (loopAskFlag) {
    var action = prompt("Please select an action: add, remove, display or quit.");
    if (action === "add") {
      addNew(prompt("What name would you like to add?"))
    } else if (action === "remove") {
      remove(prompt("What name would you like to remove?"))
    } else if (action === "display") {
      display()
    } else if (action === "quit") {
      loopAskFlag = false;
    } else {
      console.log("Please enter legal input! :)");
    }
  }
  console.log("Thanks for using this web app! :)");
}

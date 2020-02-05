/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
// Do this with a While Loop and a For Loop

var print_times = 5;
var print_count = 0;

// While Loop
while (print_count < print_times) {
  console.log("hello");
  print_count += 1;
}

// For Loop
for (var i = 0; i < print_times; i++) {
  console.log("hello");
}

/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop
var print_number_upper_limit = 25;
var print_number_count = 0;

// METHOD ONE
// While Loop
while (print_number_count < print_number_upper_limit) {
  if (print_number_count % 2 === 0) {
    console.log(print_number_count + 1);
  }

  print_number_count += 1;
}

// METHOD TWO
// For Loop
for (var i = 0; i < print_number_upper_limit; i++) {
  if (i % 2 === 0) {
    console.log(i + 1);
  }
}

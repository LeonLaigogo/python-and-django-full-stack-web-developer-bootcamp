var first_name = prompt("What is your first name?");
var last_name = prompt("What is your last name?");
var age = prompt("How old are you?");
var tall = prompt("What is your height?");
var pet_name = prompt("What is your pet's name?");
alert("Thank you for your infomation!! :)")

var age_lower_limit = 20;
var age_upper_limit = 30;
var tall_lower_limit = 170;

var is_pass_test = false;

if (first_name[0] === last_name[0]) {
  if (age > age_lower_limit && age < age_upper_limit) {
    if (tall >= tall_lower_limit) {
      if (pet_name[pet_name.length - 1] === "y") {
        console.log("Congratulations! You pass the spy test!");
        is_pass_test = true;
      }
    }
  }
}

if (!is_pass_test) {
  console.log("Nothing happened!");
}

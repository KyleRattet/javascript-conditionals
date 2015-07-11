var phoneNumber = prompt("Enter your phone number with dashes (i.e. XXX-XXX-XXXX)");

//string to array, then loop through
  if (phoneNumber.charAt(3&&7)==="-" && phoneNumber.length===12){
    alert("Thanks!");
  }
  else {
    alert("False. Incorrect phone number format. Please try again.");
    prompt("Enter your phone number with dashes (i.e. XXX-XXX-XXXX)");
  }

var birthDate = prompt("Enter your birth day (i.e. xx/xx/xx)");

  if (birthDate.charAt(2&5)==="/"){
    alert("Gracias");
  }
  else {
    alert("Wrong format. Please try again in the correct xx/xx/xx format");
  }
 //parseInt method, throw in zipcode, base 10

var postal = prompt("What is your postal code? (i.e. XXXXX)");
  if (postal.length===5){
    alert("Thx");
  }
  else {
    alert("Wrong format. Please try again in the correct XXXXX format");
  }

var stateAbbr = prompt("What state abbreviation? (i.e. XX)");
    if (stateAbbr.length===2){
      alert("Thank you.");
    }
    else {
      alert("Wrong format. Please try again");
    }

var married = prompt("Married? Yes or No?");
    if (married==="Yes"){
      alert("Congrats!");
    }
    else if(married==="No"){
      alert("Maybe later, eh?");
    }
    else {
      alert("Wrong format. Please re-enter");
    }

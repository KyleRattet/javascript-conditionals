var phoneNumber = prompt("Enter your phone number with dashes (i.e. XXX-XXX-XXXX)");

if (phoneNumber.charAt(3&7)==="-"){
  console.log("True");
}
else {
  console.log("False");
}

$(document).ready(function() {
  $("#calculator").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#countToX").val());
    const number2 = parseInt($("#whichMultiple").val());
    results = [];
    for (let index = 0; index <= number1; index += number2) {
      results.push([index]);
    }
    const outputs = results
    $("#output").text(outputs);
  });
});

// empty value response: 
// function calculator(x) {
//  if (isNaN(x)) {
  //  return("Not a number! Please enter two numbers.");
//}
// else if negative numbers {
// ???
//}
// else if count by > count to, {
  //alert(yMessage "multiplier number must be less than starting number")
//}
function add(number1, number2) {
  return number1 + number2;
} 
function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
   return number1 * number2;
}
function divide(number1, number2) {
  return number1 / number2;
}
// const number1 = parseInt(prompt("Enter a number:"));
// const number2 = parseInt(prompt("Enter another number:"));
// const result = divide(number1, number2);
// alert(result);
$(document).ready(function() {
  $("#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#addResult").text(result);
  });
  $("#subtract").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#subtract1").val());
    const number2 = parseInt($("#subtract2").val());
    const result = subtract(number1, number2);
    $("#subtractResult").text(result);
  });
  $("#multiply").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#multiply1").val());
    const number2 = parseInt($("#multiply2").val());
    const result = multiply(number1, number2);
    $("#multiplyResult").text(result);
  });
  $("#divide").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#divide1").val());
    const number2 = parseInt($("#divide2").val());
    const result = divide(number1, number2);
    $("#divideResult").text(result);
  });
});
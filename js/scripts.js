var subtract = function(num1,num2){
	num1 = parseInt(num1);
  num2 = parseInt(num2);
  return num1 - num2;
//	var result = sub(num1, num2);
}

var mult = function(num1,num2){
	num1 = parseInt(num1);
  num2 = parseInt(num2);
  return num1 * num2;
//	var result = sub(num1, num2);
}

var divMod = function(num1, num2) {
	num1 = parseInt(num1);
  num2 = parseInt(num2);
  var divided = num1 / num2;
  alert(divided);
  var remainder = num1 % num2;
  alert(remainder);
}
//
// var combine = function(var1, var2, var3) {
// 	var text = var1 + var2 + var3 ;
//   alert(text);
// }


// alert("result of subtracting "+num1+" from "+num2+" is equal to "+result)
// call functions

/* var name = prompt("What is your name?");
alert1(name);
 */
/* var result = subtract(num1,num2);
alert(result);
result = mult(num1,num2);
alert(result);
 */
/* var num2 = prompt("select another number");
var num1 = prompt("select a number");
var result = divMod(num1,num2);
*/

/*
var age = prompt("select an age");
var name = prompt("select a name");
var food = prompt("select favorite food");
combine(age, name, food); */



var add = function(number1, number2) {
  return number1 + number2;
};

var height = parseInt(prompt("Enter a height:"));
var weight = parseInt(prompt("Enter weight:"));
var BMI = 703*(weight/(height*height));
alert("BMI is " + BMI);

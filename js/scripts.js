//BMI Calculator

var height = parseFloat(prompt("Please enter your height in m"));
var weight = parseInt(prompt("Please enter your weight in kg"));

var bmi = function(weight, height){
  return (weight / height)/height;
}
alert(bmi(weight,height))

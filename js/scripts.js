var height = parseInt(prompt("Please enter your height"));
var weight = parseInt(prompt("Please enter your weight"));
var heightFinal = height * height;
var bmiCalculator = function(heightFinal, weight){
  return weight / heightFinal;
}
alert(bmiCalculator(heightFinal,weight))

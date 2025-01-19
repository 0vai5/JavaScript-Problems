// Add Digits

var addDigits = function (num) {
  var numStr = num.toString();
  var splitted = numStr.split("");

  if (splitted.length === 1) return num;
  if (num === 0) return 0;

  do {
    var sum = 0; 
    for(let i = 0; i < splitted.length; i++) {
        sum += parseInt(splitted[i]);
    }
    splitted = sum.toString().split("");
  } while (splitted.length > 1);

    return parseInt(splitted[0]);
}; 

console.log(addDigits(38)); // 2
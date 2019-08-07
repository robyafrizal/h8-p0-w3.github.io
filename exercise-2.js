//Mengakses Nilai Dalam Array

function balikString(str) {
  var input = "";
  for(var i = str.length -1; i >= 0; i--) {
    input += str[i];
  }
  return input;
}
console.log(balikString("hello world!"));


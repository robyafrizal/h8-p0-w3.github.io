//Target Terdekat
function targetTerdekat(arr) {
  // you can only write your code here!
  var nilaio = arr.indexOf("o");
  var jarak = arr.length;
  if(arr.indexOf("x") === -1) {
    return 0;
  }
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === 'x') {
      beda = Math.abs(i - nilaio);
      if(beda < jarak) {
        jarak = beda;
      }
    }
  }
  return jarak;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
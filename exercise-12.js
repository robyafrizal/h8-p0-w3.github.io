//Deret Geometri
function tentukanDeretGeometri(arr) {
  // you can only write your code here!

  // for(var i = 0; i < arr.length; i++) {
  //   var hasil = arr[i] / arr[i-1];
  //   if(hasil === arr[arr.length - 1] / arr[arr.length - 2]) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // return hasil;

  var hasil = true;
  var deret = arr[1] / arr[0];
  for(var i =0; i < arr.length - 1; i++) {
    if(deret !== (arr[i+1] / arr[i])) {
      hasil = false;
    }
  }
  return hasil;
}

/*
PSEUDOCODE
  START
  SET function tentukanDeretGeometri with parameter(arr)
  STORE 'hasil' with true
  STORE 'deret' with arr[1] / arr[0]
  STORE i with 0
  FOR i LESS THEN arr.length
    IF deret NOT EQUALS TO arr[i+1] / arr[i]  
      SET hasil EQUALS false
    END IF
    i++
  END FOR
  RETURN hasil
  END
*/

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
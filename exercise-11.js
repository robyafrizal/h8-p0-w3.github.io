//Deret Aritmatika
function tentukanDeretAritmatika(arr) {
  // you can only write your code here!

  var hasil = true;
  var deret = arr[1] - arr[0];
  for(var i =0; i < arr.length - 1; i++) {
    if(deret !== (arr[i+1] - arr[i])) {
      hasil = false;
    }
  }
  return hasil;
  }

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false


/*
PSEUDOCODE
  START
  SET function tentukanDeretAritmatika with parameter(arr)
  STORE 'hasil' EQUALS TO true
  STORE i with 0
  FOR i LESS THEN arr.length
    SET hasil with arr[i] - arr[0]
    IF hasil EQUALS TO arr[arr.length - 1] - arr[arr.length - 2] THEN
      RETURN true
    ELSE
      RETURN false
    END IF
    i++
  END FOR
  RETURN hasil
  END
*/
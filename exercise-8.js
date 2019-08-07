function pasanganTerbesar(num) {
  // you can only write your code here!

  var str = String(num);
  var pasAngka = [];
  for(var i = 0; i < str.length - 1; i++) {
    pasAngka[i] = str[i] + str[i + 1];
  }
  var urut = pasAngka.sort();
  var pasAngkaTerbesar = Number(urut[urut.length -1]);
  return pasAngkaTerbesar;
}


// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
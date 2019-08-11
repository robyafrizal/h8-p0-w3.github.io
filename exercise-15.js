function groupAnimals(animals) {
  // you can only write your code here!
  var output = []
  for(var i = 0; i < animals.length; i++) {
    var result = []
    var tampung = true
    for(var j = 0; j < output.length; j++) {
      if(animals[i][0] === output[j][0][0]) {
        output[j].push(animals[i])
        tampung = false
      }
    }
    if(tampung) {
      result.push(animals[i])
      output.push(result)
    }
  }
  return output;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] 
function groupAnimals(animals) {
  // you can only write your code here!
  var animal = animals.sort()
  var output = []
  for(var i = 0; i < animal.length; i++) {
    var hurufAwal = animal[i][0]
    var urutan = [animal[i]]
    for(var j = animal.length -1; j > i; j--) {
      if(hurufAwal === animal[j][0]) {
        urutan.push(animal[j])
        animal.splice(j, 1)
      }
    }
  output.push(urutan)
  }
  return output;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] 
var pets = ['cat', 'dog', 'rat'];

pets.forEach(function(pet, i) {
  pets[i] = pet + 's';
});
console.log(pets);

const secret = 'SUPER SECRET TOKEN';
const Said = 'Said';
const Najib = 'Najib';
const person = {
  name: 'Said',
  age: 20,
};

console.log(module);

// module.exports IS AN OBJECT

module.exports = { Said, Najib };
// OR
module.exports.items = ['item1', 'item2'];
// OR
module.exports.singlePerson = person;

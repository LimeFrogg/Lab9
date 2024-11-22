let characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna'];

for (let i = 0; i < characters.length; i++) {
  console.log(characters[i]);
}

let firstName = 'Harry';
let house = 'Gryffindor';
console.log(`Welcome, ${firstName} of ${house}!`);

let characterName = 'Hermione';
console.log(characterName.toLowerCase());
console.log(characterName.toUpperCase());

let spell = ' Expelliarmus ';
console.log(spell.trim());

let quote = 'I solemnly swear that I am up to no good';
console.log(quote.slice(13, 18));  // Extract 'swear'

let FirstName = 'Ron';
let lastName = 'Weasley';
console.log(FirstName.concat(' ', lastName));

let sentence = 'Draco is a good wizard';
console.log(sentence.replace('good', 'bad'));

let houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.push('Slytherin');
houses.pop();
console.log(houses);

let spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log(spells);

let professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];
let newProfessors = professors.slice(1, 3);
console.log(newProfessors);

console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  var middleEarth = document.createElement('section');
  for(var i = 0, len = lands.length; i < len; i++){
    var land = document.createElement('article');
    land.innerHTML = '<h1>' + lands[i] + '</h1>';
    middleEarth.appendChild(land);
  }
  body.appendChild(middleEarth);
}
makeMiddleEarth();


// create a section tag with an id of middle-earth
// inside, add each land as an article tag
// inside each article tag include an h1 with the name of the land
// append middle-earth to your document body

// Part 2
var Shire = body.querySelectorAll('article')[0];
var Rivendell = body.querySelectorAll('article')[1];
var Mordor = body.querySelectorAll('article')[2];
function makeHobbits() {
  var hobbitls = document.createElement('ul');
  for (var i = 0, len = hobbits.length; i < len; i++) {
    var hobbit = document.createElement('li');
    hobbit.className = 'hobbit';
    hobbit.innerText = hobbits[i];
    hobbitls.appendChild(hobbit);
  }
  Shire.appendChild(hobbitls);
}
makeHobbits();

// display an unordered list of hobbits in the shire (which is the second article tag on the page)
// give each hobbit a class of hobbit


// Part 3
var Frodo = body.querySelectorAll('li')[0];

function keepItSecretKeepItSafe() {
var Ring = document.createElement('div');
Ring.setAttribute('id', 'the-ring');
Ring.setAttribute('class', 'magic-imbued-jewelry');
Ring.addEventListener('click', nazgulScreech);
Frodo.appendChild(Ring);
}
keepItSecretKeepItSafe();
// create a div with an id of 'the-ring'
// give the div a class of 'magic-imbued-jewelry'
// add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
// add the ring as a child of Frodo

// Part 4


function makeBuddies() {
  var aside = document.createElement('aside');
  var buddyls = document.createElement('ul');
  for(var i = 0, len = buddies.length; i < len; i++) {
    var bud = document.createElement('li');
    bud.textContent = buddies[i];
    buddyls.appendChild(bud);
  }
  aside.appendChild(buddyls);
  Rivendell.appendChild(aside);
}
makeBuddies();
// create an aside tag
// attach an unordered list of the 'buddies' in the aside
// insert your aside as a child element of rivendell

// Part 5

var strider = Rivendell.querySelectorAll('li')[3];
function beautifulStranger() {
  strider.textContent = 'Aragon'
}
beautifulStranger();
// change the 'Strider' textnode to 'Aragorn'

// Part 6
var hobbits = Shire.querySelector('ul');
function leaveTheShire() {
  Rivendell.appendChild(hobbits);
}
leaveTheShire();
  // assemble the hobbits and move them to Rivendell

// Part 7

var fellowshipMembers = Rivendell.querySelectorAll('li');

function forgeTheFellowShip() {
  var theFellowship = document.createElement('div');
  theFellowship.setAttribute('id', 'the-fellowship');
  for(var i = 0, len = fellowshipMembers.length; i < len; i++) {
    theFellowship.appendChild(fellowshipMembers[i]);
  }
  Rivendell.appendChild(theFellowship);
}
forgeTheFellowShip();
// create a new div called 'the-fellowship' within rivendell
// add each hobbit and buddy one at a time to 'the-fellowship'
// after each character is added make an alert that they have joined your party


// Part 8

var gandalf = fellowshipMembers[0];
function theBalrog() {
  gandalf.textContent = 'Gandalf the White';
  gandalf.style.border = '2px dashed gray';
  gandalf.style.backgroundColor ='white';
}
theBalrog();
// change the 'Gandalf' textNode to 'Gandalf the White'
// apply style to the element
// make the background 'white', add a grey border

// Part 9
var Boromir = fellowshipMembers[4];
function hornOfGondor() {
  alert("Gondor's horn has blown");
  Boromir.style.textDecoration = 'line-through';
  Boromir.parentNode.removeChild(Boromir);
}
hornOfGondor();
// pop up an alert that the horn of gondor has been blown
// Boromir's been killed by the Uruk-hai!
// put a linethrough on boromir's name
// Remove Boromir from the Fellowship

// Part 10
var Sam = fellowshipMembers[6];
function itsDangerousToGoAlone(){
  Mordor.appendChild(Frodo);
  Mordor.appendChild(Sam);
  var mountDoom = document.createElement('div');
  mountDoom.setAttribute('id', 'mount-doom');
  Mordor.appendChild(mountDoom);
}
itsDangerousToGoAlone();

// take Frodo and Sam out of the fellowship and move them to Mordor
// add a div with an id of 'mount-doom' to Mordor

// Part 11
var Gollum, Ring;

function weWantsIt() {
  Gollum = document.createElement('div');
  Gollum.setAttribute('id', 'gollum');
  Ring = Frodo.querySelector('#the-ring');
  Gollum.appendChild(Ring);
  var mountDoom = mordor.querySelector('#mount-doom');
  mountDoom.appendChild(Gollum);
}
weWantsIt();
// Create a div with an id of 'gollum' and add it to Mordor
// Remove the ring from Frodo and give it to Gollum
// Move Gollum into Mount Doom

// Part 12

function thereAndBackAgain() {
  Gollum.parentElement.removeChild(Gollum);
  var hobbitsInShire = document.createElement('ul');
  var hobbits = body.querySelectorAll('.hobbit');
  for (var i = 0, len = hobbits.length; i < len; i++) {
    hobbitsInShire.appendChild(hobbits[i]);
  }
  Shire.appendChild(hobbitsInShire);
}
// remove Gollum and the Ring from the document
// remove all the baddies from the document
// Move all the hobbits back to the shire

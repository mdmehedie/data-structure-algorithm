//new Set()	Creates a new Set
//add()	Adds a new element to the Set
//delete()	Removes an element from a Set
//has()	Returns true if a value exists
//clear()	Removes all elements from a Set
//forEach()	Invokes a callback for each element
//values()	Returns an Iterator with all the values in a Set
//keys()	Same as values()
//entries()	Returns an Iterator with the [value,value] pairs from a Set

// Create a Set
const letters = new Set(['a', 'b', 'c']);

// Add Values to the Set
letters.add('a');
letters.add('b');
letters.add('c');

// List all entries
let text = '';
letters.forEach(function (value) {
  text += value;
});

// Create an Iterator
const myIterator = letters.values();

// List all Values
let text1 = '';
for (const entry of myIterator) {
  text1 += entry;
}

// Create an Iterator
const myIterator1 = letters.entries();

// List all Entries
let text2 = '';
for (const entry of myIterator1) {
  text2 += entry;
}

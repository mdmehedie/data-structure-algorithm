//Declear Object
var user = new Object(); // object constructor syntax
var user = {}; // object literal syntax

//Define Object
var user = {
  // object
  name: 'Jhon', // key = name and value = 'Jhon'
  age: 30, // key = age and value = 30
};

// this object is called a literal object
console.log(user.name); // get property value

// this object is called a literal object
user.name = 'Tohid'; //change value
console.log(user.name); // get property value

// this object is called a literal object
delete user.name; //delete a property
console.log(user.name, '<br>'); // get property value
console.log(user.age);

// const object is changable
const user1 = {
  name: 'Jhon',
  age: 30,
  'is man': true,
};
user1.name = 'Tohid';
console.log(user1.name);

// multi-word property print
console.log(user1['is man']);

// multi-word property
delete user1['is man']; // delete multi-word property
console.log(user1['is man']);

// multi-word property deaclear
user1['is man'] = true;

// access by variable
let key = 'name';
console.log(user[key]);

//Dot Access
let name = 'name';
console.log(user.name); // not possible to access using dot

//Shallow Copy
let obj = {
  name: 'Prashant',
  age: 24,
  details: {
    gender: 'Male',
  },
};

let copy = Object.assign({}, obj);
copy.name;
//"Prashant"

copy.age;
//24

copy.details.gender;
//"Male"

//Update the gender
obj.details.gender = 'Female';

copy.details.gender;
//"Female"

//Deep Copy
let copy1 = JSON.parse(JSON.stringify(obj));
copy1.name;
//"Prashant"

copy.age;
//24

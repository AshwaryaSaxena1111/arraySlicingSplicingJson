// 1. Given an array, extract a specific portion of it using array slicing.
// ["example", "mem", null, { xyz: 6 }, 88]
let a1 = ["example", "mem", null, { xyz: 6 }, 88];
console.log(a1.slice(3, 4));


// 2. Given an array, insert an Object at a specific position using array splicing.
//  [
//   { id: 1, name: 'Laptop', price: 1200 },
//   { id: 2, name: 'Smartphone', price: 800 },
//   { id: 3, name: 'Headphones', price: 100 },
//   { id: 4, name: 'Tablet', price: 500 },
// ]
let a2 = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Smartphone", price: 800 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Tablet", price: 500 },
];
a2.splice(4, 0, { id: 5, name: "iphone", price: 50000 });
console.log(a2);


// 3. Convert a JavaScript object into a JSON string.
// const person {
//         name: 'John',
//         age: 25,
//         address: {
//             city: 'New York',
//             zipCode: '10001',
//             country: 'USA'
//         },
//         contacts: {
//             email: 'john@example.com',
//             phone: '+1 555-1234'
//         }
//     }
let person = { 
        name: 'John',
        age: 25,
        address: {
            city: 'New York',
            zipCode: '10001',
            country: 'USA'
        },
        contacts: {
            email: 'john@example.com',
            phone: '+1 555-1234'
        }
    }



let json = JSON.stringify(person);

console.log(typeof json); 

console.log(json);


// 4. Convert the following JSON string back to an object:
// '{"name":"Alice","age":30,"city":"London"}’
let person1= [{"name":"Alice","age":30,"city":"London"}];
let personStringBack = JSON.parse(person1);
console.log(personStringBack);


// 5.Given an array, replace elements at index 2 and 3 with the values 8 and 9.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];
numbers[2]=8;
numbers[3]=9;
console.log(numbers);


// 6.Given an array, extract a subarray from index 1 to index 4 (excluding index 4).
let alphabates = [a, b, c, d, e, f, g, h, i, j];
let subAlphabate = slice.alphabates(1,5);
console.log(subAlphabate);


// 7.Rotate the elements of the given array to the right by 2 positions.
// Input:  [1, 2, 3, 4, 5];
// Output: [4,5,1,2,3]
let number1 = [1, 2, 3, 4, 5];
let rotateNumber1 = slice(3,0);
console.log(rotateNumber1);


// 8.Convert JSON Array of Objects to an Array of a Specific Property
const jsonArray = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' }
  ];
  const specificPropertyArray = jsonArray.map(obj => obj.name);
  console.log(specificPropertyArray);


//9.Remove Duplicates from an Array
//[1, 2, 2, 3, 4, 4, 5]




//10.Excluding or Including Specific Properties during Stringification.
// const obj = {
//     name: 'Alice',
//     age: 25,
//     sensitiveInfo: 'This should not be included in the JSON string'
//   };
const obj = {
    name: 'Alice',
    age: 25,
    sensitiveInfo: 'This should not be included in the JSON string'  
}
const jsonString = JSON.stringify(obj, (key, value) => {
    if (key === 'sensitiveInfo') {
      return undefined;
    }
    return value;
  });
  console.log(jsonString);


// 11. Inconsistent Stringification of Functions
// const obj = {
//   name: 'John',
//   age: 30,
//   sayHello: function() {
//     console.log('Hello!');
//   }
// }


  




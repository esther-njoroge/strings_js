// let text= "extravaganza";
// let a = text.substring( 8, 12)
// console.log({ a})
// Extract characters from string
let a = "extravaganza";
let text = a.substring( 8, 12);
console.log({ text});

// inserting a string at an index of a variable
const food = "The quick fox jumped over the lazy dog"
const input = (`output`, food.slice(0,4)+ "eat" + food.slice(4));
console.log(`input:`, input);

// counting how many times a string appears in a variable
const story = "The quick brown fox jumps over the lazy dog"
console.log((`story:`,story.match(/the/)).length);
console.log((`story:`,story.match(/brown/)).length);

// finding words from a string
const string1 = "The pupils are reading in the library"
console.log(string1.search(/are/));
const string2 = "The child was sitting on the table before it fell"
console.log(string2.search(/sitting/));


// convert to uppercase
let b = "Wonderful";
let word = b.toUpperCase();
console.log({ word});

// lowercase
let c = "amazing";
let lower = c.toLowerCase();
console.log({ lower});

let d = "UndERneath";
let Lower = d.toLowerCase();
console.log({ Lower});

// Title Case
// let e = "A wonderful world";
// let titlecase = e.toTitlecase();
// console.log({ titlecase});




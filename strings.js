
//Que1: Extract the last 4 characters from the string
let a = "extravaganza";
let text = a.substring(8);
console.log({ text});
// or
let m = "extravaganza";
let term= m.slice(8,);
console.log({term});

//Que2: inserting a string at an index of a variable
const food = "The quick fox jumped over the lazy dog";
let n= "eat"
const food2 = `The ${n} quick fox jumped over the lazy dog`;
console.log({food2});

// const food = "The quick fox jumped over the lazy dog"
// const input = (`output`, food.slice(0,4)+ "eat" + food.slice(4));
// console.log(`input:`, input);


//Que 3:count how many times a string appears
const story = "The quick brown fox jumps over the lazy dog";
let o = (story.match(/the/gi).length);
// console.log((story.match(/the/gi)).length); (OR)
console.log({o});
let p = (story.match(/brown/).length);
console.log({p});
// console.log((story.match(/brown/)).length); (OR)


// Que4:finding words from strings
const string1 = "The pupils are reading in the library";
let q = string1.search("are");
console.log({q});
// console.log((string1.search(/are/)));
// const string2 = "The child was sitting on the table before it fell"
// console.log(string2.search(/sitting/));
const string2 = "The child was sitting on the table before it fell"
console.log((string2.search(/sitting/)));


// Que5:

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








// const stoory = "The quick brown fox over the lazy dog"
// let e = stoory.match("the")
// console.log({ e})

// const g = 'hello'
// console.log(g[3]);

// let z = story.match("the")
// const s = "The $(word)"

// const r = "thndsnchjfc iuyvghjcxhdx";
// const t = r.includes("the");














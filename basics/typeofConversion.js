let score1 = 15;
let score2 = '20';  // number in string
let score3 = "15Xyz"  // number & alpha in string
// let score4 = 15Xyz;  // number & alpha in string
let nameValue = "Name";

// this will print in table []
console.table([nameValue, score1, score2, score3, score4]); // first print
console.table([typeof nameValue, typeof score1, typeof score2, typeof score3]);

// now lets convert value in number typeConversion

console.log(Number(score2)); // this will convert into Number
console.table([typeof score1, typeof score2, typeof score3, typeof nameValue]);

let newScore2 = Number(score2); // this will convert into Number & store in a value
console.table([typeof score1, typeof newScore2, typeof score3, typeof nameValue]);

// now lets do it for score3 as well
let newScore3 = Number(score3);
console.table([typeof score1, typeof newScore2, typeof newScore3, typeof nameValue]);
console.table([ score1,  newScore2,  newScore3, nameValue])
// but when you print values- newScore3 has NaN 
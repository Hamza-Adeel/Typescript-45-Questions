// //Q24) More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// • Tests for equality and inequality with strings
let name = 'daniyal';
console.log(name === "daniyal");
console.log(name !== "daniyal");
// • Tests using the lower case function
name = "DANI";
let name1 = "dani";
console.log(name.toLowerCase() === name1);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let age = 18;
let equalTo = age === 18;
console.log(equalTo);
let greaterThanequalTo = age >= 15;
console.log(greaterThanequalTo);
let lessThanequalTo = age <= 15;
console.log(lessThanequalTo);
let notequalTo = age !== 18;
console.log(notequalTo);
// • Tests using "and" and "or" operators
console.log(age == 13 || age == 18);
console.log(age == 138 && age == 18);
//• Test whether an item is in a array
// • Test whether an item is not in a array
let myFriends = ['Daniyal', 'Haris', 'Abdullah', 'Zain'];
console.log(myFriends[0] == "Daniyal");
console.log(myFriends[4] == "Asif");
export {};

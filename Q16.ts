//Q)16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array.Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

var relatives : string[]=['haris','daniyal','zain'];
for (const i of relatives) {
    console.log(`${i} i would like to invite for today's dinner`);
}
let haris1 : string = 'haris';
let newPerson1 : string = 'Saad';
console.log(`${haris1} is not intersted to coming at my home for dinner`);
relatives.splice(0,1);
console.log(relatives);
relatives.splice(0,0,newPerson1);
console.log(relatives);
for (let index = 0; index < relatives.length; index++) {
    const element = `${relatives[index]} you have to come over here`;
    console.log(element);
}
console.log("Ifound a bigger dinner table :)");
let newpersons2 : string [] =['abdullah','sana','wali'];
console.log('adding person');
relatives.unshift(newpersons2[0]);
relatives.splice(2,0,newpersons2[1]);
relatives.push(newpersons2[2]);
console.log(relatives);
for (let index = 0; index < relatives.length; index++) {
    const element = `${relatives[index]} you have to come here for dinner`;
    console.log(element);
}

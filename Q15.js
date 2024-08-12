//Q15) Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//Print a second set of invitation messages, one for each person who is still in your list.
var relatives = ['haris', 'daniyal', 'zain'];
for (const i of relatives) {
    console.log(`${i} i would like to invite for today's dinner`);
}
let haris = 'haris';
let newPerson = 'Saad';
console.log(`${haris} is not intersted to coming at my home for dinner`);
relatives.splice(0, 1);
console.log(relatives);
relatives.splice(0, 0, newPerson);
console.log(relatives);
for (let index = 0; index < relatives.length; index++) {
    const element = `${relatives[index]} you have to come over here`;
    console.log(element);
}
export {};

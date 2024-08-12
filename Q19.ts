// Q19).Dinner Guests: 
//Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.

var relatives: string[] = ["haris", "daniyal", "zain"];
for (const i of relatives) {
  console.log(`${i} i would like to invite for today's dinner`);
}
let haris1: string = "haris";
let newPerson1: string = "Saad";
console.log(`${haris1} is not intersted to coming at my home for dinner`);
relatives.splice(0, 1);
console.log(relatives);
relatives.splice(0, 0, newPerson1);
console.log(relatives);
for (let index = 0; index < relatives.length; index++) {
  const element = `${relatives[index]} you have to come over here`;
  console.log(element);
}
console.log("Ifound a bigger dinner table :)");
let newpersons2: string[] = ["abdullah", "sana", "wali"];
console.log("adding person");
relatives.unshift(newpersons2[0]);
relatives.splice(2, 0, newpersons2[1]);
relatives.push(newpersons2[2]);
console.log(relatives);
for (let index = 0; index < relatives.length; index++) {
  const element = `${relatives[index]} you have to come here for dinner`;
  console.log(element);
}

console.log(
  "Unfortunately guys I can invite only two persons for today's dinner "
);

while (relatives.length > 2) {
  let removeGuest = relatives.pop();
  console.log(`${removeGuest}, Sorry I can't invite you`);
}

for (const i in relatives) {
  console.log(
    `${relatives[i]}, Hey you guys are still invited at my house for today's dinner`
  );
}

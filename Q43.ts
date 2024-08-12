// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
//Because the original array will be unchanged, return the new array and store it in a separate array.
//Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


let magicians = ["Alice magicians","john magicians","Daniel magicians"]
//copy of the array
let magicians_copy = [...magicians]

 function show_magicians(greet:string) {
    let withGreetings = '';
    for (let i = 0; i < magicians_copy.length; i++) {
        withGreetings += `${greet}  ${magicians_copy[i]}\n`
        
    }
    return withGreetings
 }

console.log(show_magicians("HELLO"));
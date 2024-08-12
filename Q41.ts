// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.

let magicians = ["Alice magician","john magician","Daniel magician"]

function show_magicians(magician:string[]) {
    magician = magicians
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
        
    }
}

show_magicians(magicians)
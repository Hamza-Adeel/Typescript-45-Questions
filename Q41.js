// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
var magicians = ["Alice magician", "john magician", "Daniel magician"];
function show_magicians(magician) {
    magician = magicians;
    for (var i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
show_magicians(magicians);

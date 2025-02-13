// Album: Write a function called make_album() that builds a Object describing a music album.
//The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
//Use the function to make three dictionaries representing different albums.
//Print each return value to show that Objects are storing the album information correctly.
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
//If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//Make at least one new function call that includes the number of tracks on an album.
function make_album(artist_name, album_title) {
    return "".concat(artist_name, ": ").concat(album_title);
}
var album1 = make_album("Atif Aslam", "WO LAMHAY");
var album2 = make_album("Atif Aslam", "ADATT");
var album3 = make_album("ALI ZAFAR", "CHAL DILL MERE");
console.log(album1);
console.log(album2);
console.log(album3);
function make_album1(artist_name, album_title, track_num) {
    return "".concat(artist_name, "\n ").concat(album_title, "\n ").concat(track_num, " ");
}
var album4 = make_album1("Atif Aslam", "WO LAMHAY", 19);
var album5 = make_album1("ALI ZAFAR", "CHAL DILL MERE", 49);
var album6 = make_album1("Atif Aslam", "ADATT", 58);
console.log(album4);
console.log(album5);
console.log(album6);

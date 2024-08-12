// Favorite Fruit: Make a array of your favorite fruits, 
//and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let fruits = ["Apple", "Banana", "Lychee", "Grapes", "mango", "orange"];
if (fruits.includes("Apple")) {
    console.log("You really like Apple");
}
if (fruits.includes("Banana")) {
    console.log("You really like Banana");
}
if (fruits.includes("Grapes")) {
    console.log("You really like Grapes");
}
let favoritefruits = ["Apple", "Banana", "Grapes"];
console.log("###################################");
for (const i in favoritefruits) {
    if (favoritefruits[i] === "Apple") {
        console.log('you relly like apples');
    }
    if (favoritefruits[i] === "Banana") {
        console.log('you relly like Banana');
    }
    if (favoritefruits[i] === "Grapes") {
        console.log('you relly like Grapes');
    }
}
export {};

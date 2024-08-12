// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//The function should have one parameter that collects as many items as the function call provides,
//and it should print a summary of the sandwich that is being ordered.
//Call the function three times, using a different number of arguments each time.
function makinng_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return "I want these ".concat(items, " in my sandwich");
}
console.log(makinng_sandwich("Tomato", "Onion"));
console.log(makinng_sandwich("ginger", "Garlic"));
console.log(makinng_sandwich("Tomato", "cheese"));

const restaurantName = "Mi Tienda"
const cuisineType = "Mexican"
const city = "Houston"

let todaySpecial = "Gorditas";
let availableTables = 5;
let status = "Open";

console.log("==== Restaurant Report ====");
console.log("restaurant: " + restaurantName);
console.log("Cuisine Type: " + cuisineType);
console.log("City: " + city);
console.log("Today's Special Dish: " + todaySpecial);
console.log("Available Tables: " + availableTables);
console.log("Status: " + status);

todaySpecial = "Gorditas";
status = "Closed";

console.log(`
==== Updated Restaurant Report ====
Restaurant: ${restaurantName}
Cuisine: ${cuisineType}
City: ${city}
Today's Special Dish: ${todaySpecial}
Available Tables: ${availableTables}
Status: ${status}`);
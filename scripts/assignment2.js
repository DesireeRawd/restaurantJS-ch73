function showRestaurantName() {
    console.log("Mi Tienda");
}

showRestaurantName();

function greetCustomer(name) {
    console.log("Welcome, " + name + "! We are happy to have you at Mi Tienda.");
}

greetCustomer("Desiree");
greetCustomer("M");
greetCustomer("Rodriguez");

function calculateTotal(price, taxRate) {
    return price + (price * taxRate);
}

console.log("Gorditas - Total with tax: $" + calculateTotal(5, 0.07).toFixed(2));
console.log("Tacos - Total with tax: $" + calculateTotal(8.50, 0.08).toFixed(2));
console.log("Churros - Total with tax: $" + calculateTotal(5.25, 0.08).toFixed(2));


// Function Syntax
//1> Declare the fn (Create the fn)
function login() {
    console.log("Welcome to the system!");

    //2> Call the function (code, console, user)

};

login();

// Functions with parameters
function logout(user){
    console.log("Goodbye " + user + ", see you later!");
}

logout("Desiree");
logout("John");
logout("Mary");

// Function with multiple parameters
function gradeExam(student, correctItem, points){
    let totalPoints = correctItem * points;
    console.log(`${student} grade of the exam is: ${totalPoints}`);
};

gradeExam("Desiree", 10, 0.33);
gradeExam("John", 12, 0.33);
gradeExam("Mary", 13);


// Mini Challenge 1: Double the number

function doubleNumber(number) {
    console.log(`${number} multiplied by 2 is: ${number*2}`);
}

doubleNumber(5);
doubleNumber(10);
doubleNumber(15);
doubleNumber(20);

// Function with return
// Create a function called add that returns the operation 
// of the sum of two elements
function add(num1, num2){
    let total = num1 + num2;
    return Number(total);
};

let x = add(10, 2);
doubleNumber(x);


//using the return value in another calculation 
function applyDiscount(price, discountPercent){
    let discount = price * (discountPercent/100);
    return price - discount;
}

function addDeliveryFee(total, fee){
    return total + fee;
}

let originalPrice = 150;
let priceAfterDiscount = applyDiscount(originalPrice, 10);
let finalPrice = addDeliveryFee(priceAfterDiscount, 5);

console.log(`Original: ${originalPrice}
After Discount: ${priceAfterDiscount}
Final with delivery: ${finalPrice}
`);

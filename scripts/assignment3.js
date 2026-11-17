function checkDelivery(orderTotal) {

    if (orderTotal >= 30) {
        console.log("Order total: $" + orderTotal +
            " - Free delivery!");
    }

    if (orderTotal < 30) {
        console.log("Order total: $" + orderTotal +
            " - Delivery fee applies.");
    }

}

checkDelivery(18.75);
checkDelivery(30);

function getMenuType(hour) {

    if (hour >= 7 && hour <= 11) {
        console.log("Hour " + hour + " → Breakfast menu");
    }

    else if (hour >= 12 && hour <= 16) {
        console.log("Hour " + hour + " → Lunch menu");
    }

    else if (hour >= 17 && hour <= 22) {
        console.log("Hour " + hour + " → Dinner menu");
    }

    else {
        console.log("Hour " + hour + " → We are closed");
    }

}

getMenuType(9);
getMenuType(15);
getMenuType(20);
getMenuType(1);
// declare globals
var money = 20;                      // Starting budget
var lunches = 0;                     // Counter for how many lunches were bought

// display lunch budget
document.getElementById("money").innerHTML = money;  // Show starting money on the page

// listen for order button click and call buyLunches function
document.getElementById("placeOrder").addEventListener("click", buyLunches); // When "placeOrder" is clicked, run buyLunches

/*
buys specified number of sandwiches per day at current prices
*/
function buyLunches() {
    resetForm();                                     // Reset money, lunches, and clear receipt
    var day = 0;                                     // Track current day

    while (money > 0) {                              // Loop as long as there is money left
        day++;                                       // Increase day count
        var priceToday = getSandwichPrice();        // Get today's random sandwich price
        var numberOfSandwiches = document.getElementById("numSandwiches").value; // Get user input
        var totalPrice = priceToday * numberOfSandwiches; // Total cost for sandwiches today

        if (money >= totalPrice) {                   // If enough money for today's lunch
            money = money - totalPrice;              // Subtract cost from money
            lunches++;                               // Increase lunch count
            document.getElementById("receipt").innerHTML +=
                "<p>On day " + day + ", sandwiches are: $" + priceToday +
                ". You have $" + money.toFixed(2) + " left.</p>"; // Show successful purchase
        } else {                                     // If not enough money for lunch
            document.getElementById("receipt").innerHTML +=
                "<p>Today, sandwiches are: $" + priceToday +
                ". You don't have enough money. Maybe your sister will give you some of her sandwich.</p>"; // Message if broke
            money = 0;                               // Set money to 0 to end loop
        }
    }

    // Final message showing how many lunches were bought
    document.getElementById("receipt").innerHTML +=
        "<p>You bought " + lunches + " lunches this week.</p>";
}

/*
gets the current price of sandwiches
*/
function getSandwichPrice() {
    var sandwichPrice = (Math.random() * (1 - 0) + 1).toFixed(2); // Random price between $0.00 and $1.00
    return sandwichPrice;                                         // Return as string
}

/*
resets the game so that a new order can be placed
*/
function resetForm() {
    money = 20;                               // Reset starting money
    lunches = 0;                              // Reset lunch counter
    document.getElementById("receipt").innerHTML = ""; // Clear the receipt section
}

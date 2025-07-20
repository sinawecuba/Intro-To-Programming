// Get references to HTML elements
var todayDate = document.getElementById("todaysdate");     // Element to show today's date
var todoButton = document.getElementById("whattodo");      // Button to trigger activity suggestion

// Add a click event listener to the button
todoButton.addEventListener("click", displayActivity);     // When clicked, run displayActivity

// Create a new Date object
var d = new Date();                                        // Current date and time

// Call the displayDate() function to show today's date
displayDate();                                             // Show date on page load

// Function to display today's date
function displayDate() {
    todayDate.innerHTML = d.toDateString();                // Show full readable date (e.g., Mon Jul 17 2025)
}

// Function to show what you should do today based on the day
function displayActivity() {
    var dayOfWeek = d.getDay();                            // Get current day of week (0 = Sunday, 6 = Saturday)
    var youShould;                                         // Placeholder for activity message

    // Assign activity based on the day
    switch (dayOfWeek) {
        case 0: youShould = "Relax, it's Sunday! 😌"; break;           // Sunday
        case 1: youShould = "Start strong. Plan your week! 💪"; break; // Monday
        case 2: youShould = "It's Tuesday – maybe tacos? 🌮"; break;   // Tuesday
        case 3: youShould = "Midweek hustle. Stay focused! 🧠"; break; // Wednesday
        case 4: youShould = "It's Thursday! Almost there. 🚀"; break;  // Thursday
        case 5: youShould = "Friday fun day! 🎉"; break;               // Friday
        case 6: youShould = "Enjoy your Saturday! 🛌"; break;          // Saturday
        default: youShould = "Error: Unknown day."; break;            // Error fallback
    }

    // Display the message in the div
    document.getElementById("thingToDo").innerHTML = youShould; // Show suggestion
}

// Ask the user for their favorite day of the week
var myNumber = prompt("Enter your favorite day of the week!"); // Ask user input
var theResponse;                                               // Placeholder for response

// Evaluate the user input
switch (myNumber) {
    case "Monday":
        theResponse = "Ack!";
        break;
    case "Tuesday":
        theResponse = "Taco day!";
        break;
    case "Wednesday":
        theResponse = "Halfway there!";
        break;
    case "Thursday":
        theResponse = "It’s the new Friday!";
        break;
    case "Friday":
        theResponse = "TGIF! Yeah!";
        break;
    case "Saturday":
        theResponse = "What a day!";
        break;
    case "Sunday":
        theResponse = "Sunday = Funday!";
        break;
    default:
        theResponse = "I haven’t heard of that one!";
        break;
}

// Show a popup with the response
alert(theResponse); // Display personalized message to user

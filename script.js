// Function to determine the DOM level of an element
function getDomLevel(element) {
    let level = 0;
    while (element.parentElement) {
        level++;
        element = element.parentElement;
    }
    return level;
}

// Get the element with ID "level"
let element = document.getElementById("level");

// Calculate its DOM level
let domLevel = getDomLevel(element);

// Display the result in an alert
alert(`The level of the element is: ${domLevel}`);

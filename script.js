// Get the button and profile divs
const switchButton = document.getElementById("switchButton");
const studentA = document.getElementById("studentA");
const studentB = document.getElementById("studentB");

// Initialize which profile is visible on page load
let currentProfile = 'A'; // Start with Student A

// Function to toggle profiles and themes
function switchProfileAndTheme() {
    if (currentProfile === 'A') {
        studentA.style.display = 'none';
        studentB.style.display = 'block';
        document.body.style.backgroundColor = '#333'; // Dark theme
        document.body.style.color = '#fff'; // Light text color for dark background
        currentProfile = 'B';
    } else {
        studentA.style.display = 'block';
        studentB.style.display = 'none';
        document.body.style.backgroundColor = '#fff'; // Light theme
        document.body.style.color = '#333'; // Dark text for light background
        currentProfile = 'A';
    }
}

// Set initial state: Show Student A and apply light theme
studentA.style.display = 'block';
studentB.style.display = 'none';

// Add event listener to the switch button
switchButton.addEventListener('click', switchProfileAndTheme);

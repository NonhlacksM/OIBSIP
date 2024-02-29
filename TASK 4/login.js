// Function to handle login
function login() {
    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Get the stored username and password from localStorage
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    // Check if the entered username and password match the stored credentials
    if (username === storedUsername && password === storedPassword) {
        // Redirect to the welcome page if login is successful
        window.location.href = "welcome.html";
    } else {
        // Display an error message if login fails
        document.getElementById("message").innerHTML = "Invalid username or password";
    }
}

// Add event listener for form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Call the login function
    login();
});



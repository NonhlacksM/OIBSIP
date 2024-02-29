// Function to handle user registration
function register() {
    // Get the new username and password from the form
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    // Store the new username and password in localStorage
    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword);

    // Display a success message with a login link
    document.getElementById("message").innerHTML = "Registration successful. You can now <a href='login.html'>login</a>.";
}

// Add event listener for form submission
document.getElementById("registerForm").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Call the register function
    register();
});


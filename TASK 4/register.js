function register() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword);

    document.getElementById("message").innerHTML = "Registration successful. You can now <a href='login.html'>login</a>.";
}

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    register();
});

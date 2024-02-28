function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        window.location.href = "welcome.html";
    } else {
        document.getElementById("message").innerHTML = "Invalid username or password";
    }
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    login();
});


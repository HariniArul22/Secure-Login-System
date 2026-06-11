function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    localStorage.setItem(username, password);

    document.getElementById("message").innerHTML =
        "Registration Successful";
}

function login() {
    let username = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPass").value;

    let storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        document.getElementById("message").innerHTML =
            "Login Successful";
    } else {
        document.getElementById("message").innerHTML =
            "Invalid Credentials";
    }
}

function logout() {
    document.getElementById("message").innerHTML =
        "Logged Out Successfully";
}
//register
document.addEventListener("DOMContentLoaded", function () {
    const regForm = document.getElementById("register_form")
    if (regForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("reg_username").value;
            const password = document.getElementById("reg_password").value;

            if (localStorage.getItem(username)) {
                alert("User already exists");
                return;
            }
            console.log(document.getElementById('username'));


            localStorage.setItem(username, password);
            alert("User registered successfully");
            window.location.href = "login.html";

        })
    }
    else {
        console.error("Register form not found");
    }
})


//login
document.getElementById("login_form").addEventListener("submit", function (event) {

    event.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    const storedPassword = localStorage.getItem(user);

    if (storedPassword === pass) {
        localStorage.setItem("loggedInUser", user);
        alert("Logged in successfully");
        window.location.href = "index.html";
    }
    else {
        alert("Invalid credentials");
    }

})


window.addEventListener('load', function () {


    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser && this.window.location.pathname.endsWith("login.html")) {
        window.location.href = "index.html";
    }

})
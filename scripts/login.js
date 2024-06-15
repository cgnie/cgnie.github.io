
function login_redict() {
    window.location.href = "login.html";
}

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    email = localStorage.getItem(email);
    if (email !== null){
        var pwd = dict[email]
        if (pwd === password){
            alert("Success!");
            window.location.href = "index.html";
        } else {
            alert("Login Failed! Please Check Your Email or Password!");
        }
    } else {
        lert("Login Failed! Please Check Your Email or Password!");
    }
}

function register_redirect() {
    window.location.href = "register.html";
}

function register() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cur = localStorage.getItem(email);
    if ( cur === null) {
        localStorage.setItem(email, password);
        alert("Register Successed!")
        window.location.href = "login.html";
    } else {
        alert("Current email has been registered!")
    }
}


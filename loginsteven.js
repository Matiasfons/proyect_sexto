function login () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let user = {
        username: username,
        password: password
    }
    let json = JSON.stringify(user);
    localStorage.setItem("user", json);
    window.location.href = "home.html";
}
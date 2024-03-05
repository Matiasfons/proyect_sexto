let admin = false;
document.getElementById("myCheckbox").addEventListener("change", function () {
  admin = this.checked;
});

async function login(event) {
  event.preventDefault();
  var username = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    document.getElementById("message").innerHTML =
      "Por favor, complete todos los campos.";
    return;
  }
  var data = {
    username: username,
    password: password,
    admin: admin,
  };
  var response = await fetch("../../controllers/login/login.controller.php", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  if (response.ok) {
    var responseData = await response.json();
    if (responseData.success) {
      if (responseData.role) {
        sessionStorage.setItem("user", JSON.stringify(responseData.data));
        sessionStorage.setItem("role", JSON.stringify(responseData.role));
        sessionStorage.setItem("name", JSON.stringify(responseData.name));
        console.log(responseData.role);
      } else {
        sessionStorage.setItem("user", JSON.stringify(responseData.data));
      }
      sessionStorage.setItem("id", JSON.stringify(responseData.id));


        window.location.href = "../layout/layout.php";
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Credenciales Incorrectas",
      });
    }
  } else {
    console.error("Error en la petición:", response.status);
  }
}

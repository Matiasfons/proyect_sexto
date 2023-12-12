async function login() {

    var username = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    if (username === '' || password === '') {
        document.getElementById('message').innerHTML = 'Por favor, complete todos los campos.';
        return;
    }
    var data = {
        username: username,
        password: password
    };
    var response = await fetch('../../controllers/login/login.controller.php', {
        headers: {
            'Content-Type': 'application/json'
        },        
        method: 'POST',
        body: JSON.stringify(data)
    });
        if (response.ok) {
        var responseData = await response.json();
        if (responseData.success) {
            //TODO NAVIGATE TO NEW PAGE
        }else{
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Credenciales Incorrectas",
              });
        }
    } else {
        console.error('Error en la petición:', response.status);
    }
    

}

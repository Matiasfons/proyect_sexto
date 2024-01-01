async function postContact(event) {
    event.preventDefault();
    var identification = document.getElementById('identification').value;
    var names = document.getElementById('names').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var area = document.getElementById('area').value;
    var message = document.getElementById('message').value;
    if (identification === '' || names === '' || lastName === '' || address === '' || phone === '', email ==='', area ==='', message ==='') {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Por favor, complete todos los campos",
        });
        return;
    }
    var data = {
        identification: identification,
        names: names,
        lastName: lastName,
        address: address,
        phone: phone,
        email: email,
        area: area,
        message:message

    };
    var response = await fetch('../../controllers/contact/contact.controller.php', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    });
    document.getElementById('identification').value = "";
    document.getElementById('names').value = "";
    document.getElementById('lastName').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('address').value = "";
    document.getElementById('area').value = "";
    document.getElementById('message').value = "";

    if (response.ok) {
        var responseData = await response.json();
        if (responseData.success) {
            await Swal.fire("Enviado", "Informe enviado. Recibirás la respuesta a través del correo electrónico.", "success");
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Error en la creación del Reporte",
            });
        }
    } else {
        console.error('Error en la petición:', response.status);
    }


}

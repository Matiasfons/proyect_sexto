async function postTeam(event) {
    event.preventDefault();
    var names = document.getElementById('names').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var identification = document.getElementById('identification').value;
    var area = document.getElementById('area').value;
    var boton = document.getElementById('btn_cerrar');

    if (names === '' || lastName === '' || email === '' || identification === '' || area === '') {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Por favor, complete todos los campos",
        });
        return;
    }
    var data = {
        names: names,
        lastName: lastName,
        email: email,
        identification: identification,
        area: area

    };
    var response = await fetch('../../controllers/team/team.controller.php', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    });
    getAllRegisters();
    boton.click();
    document.getElementById('names').value = "";
    document.getElementById('lastName').value = "";
    document.getElementById('email').value = "";
    document.getElementById('identification').value = "";
    document.getElementById('area').value = "";
    if (response.ok) {
        var responseData = await response.json();
        if (responseData.success) {
            await Swal.fire("Creado", "Integrante Creado", "success");
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Error en la creación del Integrante",
            });
        }
    } else {
        console.error('Error en la petición:', response.status);
    }


}


async function getAllRegisters() {
    var html = "";

    var response = await fetch('../../controllers/team/team.controller.php?type=all', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET',
    });
    if (response.ok) {
        var responseData = await response.json();
        responseData.data.forEach((valor, index) => {
            html += `<tr>
            <td>${index + 1}</td>
            <td>${valor.names}</td>
            <td>${valor.lastNames}</td>
            <td>${valor.identification}</td>
            <td>${valor.email}</td>
            <td>${valor.area}</td>

        <td>
        <button class='btn btn-success' onclick='editar()'>Editar</button>
        <button class='btn btn-danger' onclick='deleteRegister(${valor.Id})'>Eliminar</button>
        </td></tr>
            `;
        });
        $("#tabla_equipo").html(html);
    } else {
        console.error('Error en la petición:', response.status);
    }
}
async function deleteRegister(id) {

    Swal.fire({
        title: "Equipo",
        text: "Esta seguro de eliminar al integrante?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Eliminar",
    }).then(async (result) => {
        var data = {
            id: id
        };
        var response = await fetch('../../controllers/team/team.controller.php', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
            body: JSON.stringify(data)
        });
        getAllRegisters();
    });




}



document.addEventListener('DOMContentLoaded', async function () {
    await getAllRegisters();
});
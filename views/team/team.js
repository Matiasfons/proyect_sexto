async function postTeam(event) {
  event.preventDefault();

  var names = document.getElementById("names").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var identification = document.getElementById("identification").value;
  var area = document.getElementById("area").value;
  var boton = document.getElementById("btn_cerrar");

  if (
    names === "" ||
    lastName === "" ||
    email === "" ||
    identification === "" ||
    area === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Por favor, complete todos los campos",
    });
    return;
  }
  //VALIDAR CEDULA

  var data = {
    names: names,
    lastName: lastName,
    email: email,
    identification: identification,
    area: area,
  };
  var response = await fetch("../../controllers/team/team.controller.php", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  getAllRegisters();
  boton.click();
  document.getElementById("names").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("identification").value = "";
  document.getElementById("area").value = "";
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
    console.error("Error en la petición:", response.status);
  }
}

async function getAllRegisters() {
  var html = "";

  var response = await fetch(
    "../../controllers/team/team.controller.php?type=all",
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    }
  );
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
        <button data-bs-toggle="modal" data-bs-target="#Modal_equipoUpdate" class='btn btn-success' onclick='loadData(event,${JSON.stringify(
          valor
        )})'>Editar</button>
        <button class='btn btn-danger' onclick='deleteRegister(${
          valor.Id
        })'>Eliminar</button>
        </td></tr>
            `;
    });
    $("#tabla_equipo").html(html);
  } else {
    console.error("Error en la petición:", response.status);
  }
}

async function deleteRegister(Id) {
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
      Id: Id,
    };
    var response = await fetch("../../controllers/team/team.controller.php", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify(data),
    });
    getAllRegisters();
  });
}

async function loadData(event, valor) {
  event.preventDefault();
  document.getElementById("namesU").value = valor.names;
  document.getElementById("lastNameU").value = valor.lastNames;
  document.getElementById("emailU").value = valor.email;
  document.getElementById("identificationU").value = valor.identification;
  document.getElementById("areaU").value = valor.area;
  document.getElementById("idUpdate").value = valor.Id;
}
async function update(event) {
  event.preventDefault();
  //   //  OBTUVE LOS CAOMPOS
  var names = document.getElementById("namesU").value;
  var lastName = document.getElementById("lastNameU").value;
  var email = document.getElementById("emailU").value;
  var identification = document.getElementById("identificationU").value;
  var area = document.getElementById("areaU").value;
  var boton = document.getElementById("btn_cerrarU");
  var Id = document.getElementById("idUpdate");

  var data = {
    names: names,
    lastName: lastName,
    email: email,
    identification: identification,
    area: area,
    Id: Id.value,
  };
  var response = await fetch("../../controllers/team/team.controller.php", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "UPDATE",
    body: JSON.stringify(data),
  });
  getAllRegisters();
  boton.click();
}

document.addEventListener("DOMContentLoaded", async function () {
  await getAllRegisters();
});

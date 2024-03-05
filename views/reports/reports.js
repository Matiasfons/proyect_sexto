document.addEventListener("DOMContentLoaded", function () {
  if (sessionStorage.getItem("role")) {
    document.getElementById("act").hidden = false;
    document.getElementById("respuestaU").disabled = false;
  } else {
    document.getElementById("act").hidden = true;
    document.getElementById("respuestaU").disabled = true;
  }

  if (!sessionStorage.getItem("user")) {
    window.location.href = "../login/login.php";
  }
  // Obtén el elemento por su ID
  if (sessionStorage.getItem("role")) {
    let teamLink = document.getElementById("team");
    // Oculta el elemento
    teamLink.style.display = "none";
  }
});

async function getAllRegisters() {
  var html = "";

  var response = await fetch(
    "../../controllers/contact/contact.controller.php?type=all",
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
      console.log();
      if (sessionStorage.getItem("role")) {
        if (
          sessionStorage.getItem("role").toLowerCase() ===
          `"${valor.area.toLowerCase()}"`
        ) {
          html += `<tr style="background-color: ${
            valor.atendido == 0 ? "#FFD1DC" : "#B2F7BA"
          };">
            <td>${index + 1}</td>
            <td>${valor.nombre}</td>
            <td>${valor.apellido}</td>
            <td>${valor.cedula}</td>
            <td>${valor.direccion}</td>
            <td>${valor.telefono}</td>
            <td>${valor.email}</td>
            <td>${valor.area}</td>
            <td>
              <button data-bs-toggle="modal" data-bs-target="#Modal_equipoUpdate" class='btn btn-success' onclick='loadData(event,${JSON.stringify(
                valor
              )})'>Editar</button>
            </td>
          </tr>`;
        }
      } else {
        html += `<tr style="background-color: ${
          valor.atendido == 0 ? "#FFD1DC" : "#B2F7BA"
        };">
          <td>${index + 1}</td>
          <td>${valor.nombre}</td>
          <td>${valor.apellido}</td>
          <td>${valor.cedula}</td>
          <td>${valor.direccion}</td>
          <td>${valor.telefono}</td>
          <td>${valor.email}</td>
          <td>${valor.area}</td>
          <td>
            <button data-bs-toggle="modal" data-bs-target="#Modal_equipoUpdate" class='btn btn-success' onclick='loadData(event,${JSON.stringify(
              valor
            )})'>Ver Información</button>
          </td>
        </tr>`;
      }
    });
    $("#tabla_reports").html(html);
  } else {
    console.error("Error en la petición:", response.status);
  }
}

async function loadData(event, valor) {
  console.log(valor);
  event.preventDefault();
  document.getElementById("namesU").value = valor.nombre;
  document.getElementById("lastNameU").value = valor.apellido;
  document.getElementById("emailU").value = valor.email;
  document.getElementById("identificationU").value = valor.cedula;
  document.getElementById("areaU").value = valor.area;
  document.getElementById("direccionU").value = valor.direccion;
  document.getElementById("telefonoU").value = valor.telefono;
  document.getElementById("mensajeU").value = valor.mensaje;
  document.getElementById("respuestaU").value = valor.respuesta;
  document.getElementById("idUpdate").value = valor.id_reporte;
}
async function update(event) {
  event.preventDefault();
  var boton = document.getElementById("btn_cerrarU");

  //   //  OBTUVE LOS CAOMPOS
  var respuestaU = document.getElementById("respuestaU").value;
  var Id = document.getElementById("idUpdate");
  var emailU = document.getElementById("emailU").value;

  var data = {
    response: respuestaU,
    Id: Id.value,
    idUser:localStorage.getItem("id")
  };
  var response = await fetch(
    "../../controllers/contact/contact.controller.php",
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "UPDATE",
      body: JSON.stringify(data),
    }
  );
  getAllRegisters();
  var dataEmail = {
    email:emailU ,
    message: respuestaU,
  };
  var email = await fetch(
    "http://127.0.0.1:1337/recovery/password",
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(dataEmail),
    }
  );
  boton.click();
}

document.addEventListener("DOMContentLoaded", async function () {
  await getAllRegisters();
});

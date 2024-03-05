const navLinks = document.querySelectorAll(".nav_list a");
const iframe = document.querySelector("iframe");
async function getAllRegisters() {
  var html = "<p><b>Reportes Pendientes</b></p>";

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
      if (sessionStorage.getItem("role")) {
        if (
          sessionStorage.getItem("role").toLowerCase() ===
          `"${valor.area.toLowerCase()}"`
        ) {
          if (valor.atendido == 0) {
            html += `<tr style="background-color: ${
              valor.atendido == 0 ? "#FFD1DC" : "#B2F7BA"
            };">
              <td>${index + 1} --></td>
              <td>${valor.nombre}</td>
             
            </tr>`;
          }
        }
      } else {
        if (valor.atendido == 0) {
          html += `<tr style="background-color: ${
            valor.atendido == 0 ? "#FFD1DC" : "#B2F7BA"
          };">
            <td>${index + 1} --></td>
            <td>${valor.nombre}</td>
           
          </tr>`;
        }
      }
    });
    return html;
  } else {
    console.error("Error en la petición:", response.status);
  }
}

$(document).ready(function () {
  $("#popoverNotificaciones").popover({
    container: "body",
    html: true,
    placement: "bottom",
    content: function () {
      return getAllRegisters().then((html) => html); // Aquí asumes que getAllRegisters ahora devuelve una Promise con el HTML
    },
    trigger: "focus",
  });

  // Para resolver el contenido de forma asíncrona, necesitamos manejarlo con un evento adicional
  $("#popoverNotificaciones").on("inserted.bs.popover", async function () {
    const htmlContent = await getAllRegisters();
    const popoverId = $(this).attr("aria-describedby");
    $("#" + popoverId + " .popover-body").html(htmlContent);
  });
});
document.addEventListener("DOMContentLoaded", async function () {
  await getAllRegisters();
});

document.addEventListener("DOMContentLoaded", function () {
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  );
  if (sessionStorage.getItem("role")) {
    document.getElementById("name").innerText = `${sessionStorage.getItem(
      "name"
    )}-${sessionStorage.getItem("role")}`;
  } else {
    document.getElementById("name").innerText = "ADMIN";
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
  $(function () {
    $('[data-toggle="popover"]').popover({
      container: "body",
    });
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (sessionStorage.getItem("role")) {
      const href = link.getAttribute("href");

      if (href.includes("../team/teams.php")) {
        iframe.src = "";
      } else {
        iframe.src = href;
      }
    } else {
      const href = link.getAttribute("href");
      iframe.src = href;
    }
  });
});

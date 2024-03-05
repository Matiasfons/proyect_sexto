const mensajes = document.querySelector("#mensajes");
const input = document.querySelector("#mensaje");
const enviar = document.querySelector("#enviar");
const API_KEY = "YOUR_API_KEY";
const apiUrl =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" +
  "AIzaSyD2vIrtCUhfFLXcLF-rhDW-w_VBYXpFEMU";

const generateContent = async () => {
  var responseP = await fetch(
    "../../controllers/contact/contact.controller.php?type=all",
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    }
  );
  var responseDataP = await responseP.json();
  let stringcontext = "";
  // for (let i = 0; i < responseDataP.data.length; i++) {
  //   stringcontext +=  `[reporte]` ;
  // }
  console.log(responseDataP.data);
  const data = {
    contents: [
      {
        role: "user",
        parts: [{ text: `Siempre debes responder en base a este contexto que te voy a proporcionar, esto se va a denominar 'reportes', si atendido es igual a 0 esta pendiente y si es igual a 1 esta atendido y debes siempre responder en base a esto: ${JSON.stringify(responseDataP.data)}`}],
      },
      {
        role: "model",
        parts: [{ text: "ok"}],
      },
      {
        role: "user",
        parts: [
          {
            text: input.value,
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
      stopSequences: [],
    },
    safetySettings: [
      {
        category: "HARM_CATEGORY_HARASSMENT",
        threshold: "BLOCK_MEDIUM_AND_ABOVE",
      },
      {
        category: "HARM_CATEGORY_HATE_SPEECH",
        threshold: "BLOCK_MEDIUM_AND_ABOVE",
      },
      {
        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        threshold: "BLOCK_MEDIUM_AND_ABOVE",
      },
      {
        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
        threshold: "BLOCK_MEDIUM_AND_ABOVE",
      },
    ],
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  return responseData.candidates[0].content.parts[0].text;
};

enviar.addEventListener("click", async () => {
  const mensaje = input.value;
  mensajes.appendChild(crearMensaje(mensaje));
  const respuestaIA = await generateContent();
  mensajes.appendChild(crearMensaje(respuestaIA));
  input.value = "";
});

const crearMensaje = (mensaje) => {
  const elemento = document.createElement("md-block");
  elemento.textContent = mensaje;
  elemento.classList.add("mensaje");
  elemento.style.padding = "10px";
  elemento.style.borderRadius = "5px";
  // elemento.style.backgroundColor = "#e0f7fa";
  elemento.style.margin = "10px";
  // elemento.style.display = "inline-block";
  // elemento.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
  return elemento;
};

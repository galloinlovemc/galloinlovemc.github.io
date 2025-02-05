// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Vemos salir el Sol a lo largo de la costa", time: 28 },
  { text: "Mientras envejecemos", time: 33 },
  { text: "No puedo describir lo que estoy sintiendo", time: 38 },
  { text: "Y todo lo que se, es que vamos a casa...", time: 44 },
  { text: "Asi que por favor, no me dejes...", time: 48 },
  { text: "No me dejes", time: 52 },
  { text: "Y si te parece bien...", time: 56 },
  { text: "No me importa cuanto tiempo tome", time: 58.5 },
  { text: "Mientras este contigo, yo tengo una sonrisa en mi cara :D", time: 66 },
  { text: "Guarda tus lagrimas, todo estara bien", time: 73 },
  { text: "Todo lo que se...", time: 82 },
  { text: "Es que estas aqui conmigo💖", time: 85 },
  { text: "Vemos salir el Sol", time: 104 },
  { text: "Mientras envejecemos", time: 108 },
  { text: "No lo puedo describir...", time: 115 },
  { text: "Desearia poder vivir a traves de cada recuerdo contigo", time: 120 },
  { text: "Solo una vez mas antes de que flotes en el viento", time: 128 },
  { text: "Y todo el tiempo que pasamos...", time: 135 },
  { text: "Esperando a que la luz nos lleve", time: 138 },
  { text: "Han sido los mejores momentos de mi vida", time: 143 },
  { text: "No me importa cuanto tiempo tome", time: 150 },
  { text: "Mientras este contigo, yo tengo una sonrisa en mi cara", time: 157 },
  { text: "Guarda tus lagrimas, todo estara bien", time: 164 },
  { text: "Estas aqui conmigo💖", time: 177 },
  { text: "No lo puedo describir...", time: 192 },
  { text: "Ojala esto pueda demostrar un poco lo que siento por ti", time: 200 },
  { text: "No sabes lo mucho que me importas en esta vida", time: 208 },
  { text: "Te amo mucho michelle💖", time: 214},
  { text: "Te amare para toda la vida...", time: 222},
  { text: "Felices 4 meses y un proximo feliz San Valentin, Juntos", time: 229}
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (210,000 milisegundos)
setTimeout(ocultarTitulo, 210000);
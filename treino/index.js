let startTime;
let timerInterval;

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  let elapsedTime = Date.now() - startTime;
  let seconds = Math.floor(elapsedTime / 1000) % 60;
  let minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
  let hours = Math.floor(elapsedTime / 1000 / 60 / 60);

  // Adiciona um zero à esquerda para garantir que os números tenham sempre dois dígitos
  seconds = seconds.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  hours = hours.toString().padStart(2, '0');

  // Exibe o tempo atualizado na página
  document.getElementById('timer').textContent = `${hours}:${minutes}:${seconds}`;
}

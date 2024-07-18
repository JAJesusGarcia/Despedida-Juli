// Función para actualizar la cuenta regresiva
function updateCountdown() {
  const targetDate = new Date('2024-12-31T23:59:59').getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days.toString().padStart(2, '0');
  document.getElementById('hours').innerText = hours
    .toString()
    .padStart(2, '0');
  document.getElementById('minutes').innerText = minutes
    .toString()
    .padStart(2, '0');
  document.getElementById('seconds').innerText = seconds
    .toString()
    .padStart(2, '0');
}

// Actualizar la cuenta regresiva cada segundo
setInterval(updateCountdown, 1000);

// Inicializar la cuenta regresiva
updateCountdown();

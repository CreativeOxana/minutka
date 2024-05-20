const alarm = document.querySelector('.alarm');
const audio = document.querySelector('audio');
const button = document.querySelector('button');
const seconds = Number(prompt('Zadejte počet sekund k odpočtu:'));
const ring = () => {
  alarm.classList.add('alarm--ring');
  audio.play();
};
const timeout = setTimeout(ring, seconds * 1000);
button.addEventListener('click', () => {
  clearTimeout(timeout);
});

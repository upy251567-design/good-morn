const surpriseBtn = document.getElementById('surpriseBtn');
const surprise = document.getElementById('surprise');

surpriseBtn.addEventListener('click', () => {
  const isVisible = surprise.classList.toggle('show');
  surpriseBtn.textContent = isVisible
    ? 'Royal order delivered 👑'
    : 'Tap for Pushpa’s royal order 👑';
});

const emojis = ['✨', '💛', '🌼', '💕', '☀️'];
function makePop() {
  const el = document.createElement('span');
  el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  el.className = 'pop';
  el.setAttribute('aria-hidden', 'true');
  el.style.cssText = `
    position: fixed;
    z-index: 5;
    left: ${10 + Math.random() * 80}%;
    top: ${20 + Math.random() * 60}%;
    pointer-events: none;
    font-size: ${18 + Math.random() * 18}px;
    animation: popAway 1.3s ease-out forwards;
  `;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1400);
}

const style = document.createElement('style');
style.textContent = `
@keyframes popAway {
  0% { opacity: 0; transform: translateY(10px) scale(.5) rotate(-15deg); }
  25% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-70px) scale(1.3) rotate(20deg); }
}`;
document.head.appendChild(style);

surpriseBtn.addEventListener('click', () => {
  for (let i = 0; i < 7; i++) setTimeout(makePop, i * 70);
});

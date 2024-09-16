//======================= Footer ================================================

document.getElementById('currentYear').textContent = new Date().getFullYear();

const magicalStars = document.getElementById('magicalStars');
const numberOfStars = 50;

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = `${Math.random() * 3 + 1}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    magicalStars.appendChild(star);
}
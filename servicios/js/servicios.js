
//======================= Background body ================================================
const symbols = '☠︎☽♆⚰︎⚱︎☾♱⛧⍟✠✯';
const background = document.querySelector('.background');
const symbolElements = [];

function createSymbol() {
    const symbol = document.createElement('div');
    symbol.classList.add('symbol');
    symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    symbol.style.left = `${Math.random() * 100}%`;
    symbol.style.top = `${Math.random() * 100}%`;
    background.appendChild(symbol);
    symbolElements.push(symbol);
}

for (let i = 0; i < 20; i++) {
    createSymbol();
}

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    symbolElements.forEach((symbol) => {
        const rect = symbol.getBoundingClientRect();
        const symbolX = rect.left + rect.width / 2;
        const symbolY = rect.top + rect.height / 2;

        const distanceX = mouseX - symbolX;
        const distanceY = mouseY - symbolY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < 100) {
            const angle = Math.atan2(distanceY, distanceX);
            const newX = symbolX + Math.cos(angle) * 20;
            const newY = symbolY + Math.sin(angle) * 20;

            symbol.style.left = `${newX}px`;
            symbol.style.top = `${newY}px`;
            symbol.style.color = 'rgba(255, 0, 0, 0.8)';
            symbol.style.textShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
        } else {
            symbol.style.color = 'rgba(255, 0, 0, 0.6)';
            symbol.style.textShadow = 'none';
        }
    });
});

//======================= Card ================================================

function revealContent(card) {
    const content = card.querySelector('.card-content');
    content.style.transform = content.style.transform === 'translateY(0px)' ? 'translateY(100%)' : 'translateY(0)';
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        card.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    });
});
